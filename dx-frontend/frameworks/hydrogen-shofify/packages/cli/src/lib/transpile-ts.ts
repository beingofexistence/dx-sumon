import type {CompilerOptions} from 'typescript';
import {glob, readFile, writeFile, removeFile} from '@shopify/cli-kit/node/fs';
import {outputDebug} from '@shopify/cli-kit/node/output';
import {joinPath} from '@shopify/cli-kit/node/path';
import {formatCode, getCodeFormatOptions} from './format-code.js';

const escapeNewLines = (code: string) =>
  code.replace(/\n\n/g, '\n/* :newline: */');
const restoreNewLines = (code: string) =>
  code.replace(/\/\* :newline: \*\//g, '\n');

export type TranspilerOptions = Omit<CompilerOptions, 'target'>;

const DEFAULT_TS_CONFIG: TranspilerOptions = {
  lib: ['DOM', 'DOM.Iterable', 'ES2022'],
  isolatedModules: true,
  esModuleInterop: true,
  resolveJsonModule: true,
  target: 'ES2022',
  strict: true,
  allowJs: true,
  forceConsistentCasingInFileNames: true,
  skipLibCheck: true,
};

export async function transpileFile(code: string, config = DEFAULT_TS_CONFIG) {
  const tsImport = await import('typescript');
  const ts = tsImport.default ?? tsImport;

  // We need to escape new lines in the template because TypeScript
  // will remove them when compiling.
  const withArtificialNewLines = escapeNewLines(code);

  // We compile the template to JavaScript.
  const compiled = ts.transpileModule(withArtificialNewLines, {
    reportDiagnostics: false,
    compilerOptions: {
      ...config,
      // '1' tells TypeScript to preserve the JSX syntax.
      jsx: 1,
      removeComments: false,
    },
  });

  // Here we restore the new lines that were removed by TypeScript.
  return restoreNewLines(compiled.outputText);
}

const DEFAULT_JS_CONFIG: Omit<CompilerOptions, 'jsx'> = {
  allowJs: true,
  forceConsistentCasingInFileNames: true,
  strict: true,
  lib: ['DOM', 'DOM.Iterable', 'ES2022'],
  esModuleInterop: true,
  isolatedModules: true,
  jsx: 'react-jsx',
  noEmit: true,
  resolveJsonModule: true,
};

// https://code.visualstudio.com/docs/languages/jsconfig#_jsconfig-options
const JS_CONFIG_KEYS = [
  'noLib',
  'target',
  'module',
  'moduleResolution',
  'checkJs',
  'experimentalDecorators',
  'allowSyntheticDefaultImports',
  'baseUrl',
  'paths',
  ...Object.keys(DEFAULT_JS_CONFIG),
];

export function convertConfigToJS(tsConfig: {
  include?: string[];
  compilerOptions?: CompilerOptions;
}) {
  const jsConfig = {
    compilerOptions: {...DEFAULT_JS_CONFIG},
  } as typeof tsConfig;

  if (tsConfig.include) {
    jsConfig.include = tsConfig.include
      .filter((s) => !s.endsWith('.d.ts'))
      .map((s) => s.replace(/\.ts(x?)$/, '.js$1'));
  }

  if (tsConfig.compilerOptions) {
    for (const key of JS_CONFIG_KEYS) {
      if (tsConfig.compilerOptions[key] !== undefined) {
        jsConfig.compilerOptions![key] = tsConfig.compilerOptions[key];
      }
    }
  }

  return jsConfig;
}

export async function transpileProject(projectDir: string) {
  const entries = await glob('**/*.+(ts|tsx)', {
    absolute: true,
    cwd: projectDir,
  });

  const formatConfig = await getCodeFormatOptions();

  for (const entry of entries) {
    if (entry.endsWith('.d.ts')) {
      await removeFile(entry);
      continue;
    }

    const tsx = await readFile(entry);
    const mjs = await formatCode(await transpileFile(tsx), formatConfig);

    await removeFile(entry);
    await writeFile(entry.replace(/\.ts(x?)$/, '.js$1'), mjs);
  }

  // Change extensions in remix.config.js
  try {
    const remixConfigPath = joinPath(projectDir, 'remix.config.js');
    let remixConfig = await readFile(remixConfigPath);

    remixConfig = remixConfig.replace(/\/server\.ts/gim, '/server.js');

    await writeFile(remixConfigPath, remixConfig);
  } catch (error) {
    outputDebug(
      'Could not change TS extensions in remix.config.js:\n' +
        (error as Error).stack,
    );
  }

  // Transpile tsconfig.json to jsconfig.json
  try {
    const tsConfigPath = joinPath(projectDir, 'tsconfig.json');
    const tsConfigWithComments = await readFile(tsConfigPath);
    const jsConfig = convertConfigToJS(
      JSON.parse(tsConfigWithComments.replace(/^\s*\/\/.*$/gm, '')),
    );

    await removeFile(tsConfigPath);
    await writeFile(
      joinPath(projectDir, 'jsconfig.json'),
      JSON.stringify(jsConfig, null, 2),
    );
  } catch (error) {
    outputDebug(
      'Could not transpile tsconfig.json:\n' + (error as Error).stack,
    );
  }

  // Remove some TS dependencies
  try {
    const pkgJson = JSON.parse(
      await readFile(joinPath(projectDir, 'package.json')),
    );

    delete pkgJson.scripts['typecheck'];
    delete pkgJson.devDependencies['typescript'];
    delete pkgJson.devDependencies['@shopify/oxygen-workers-types'];

    for (const key of Object.keys(pkgJson.devDependencies)) {
      if (key.startsWith('@types/')) {
        delete pkgJson.devDependencies[key];
      }
    }

    const codegenFlag = /\s*--codegen(-unstable)?/;
    if (pkgJson.scripts?.dev) {
      pkgJson.scripts.dev = pkgJson.scripts.dev.replace(codegenFlag, '');
    }
    if (pkgJson.scripts?.build) {
      pkgJson.scripts.build = pkgJson.scripts.build.replace(codegenFlag, '');
    }

    await writeFile(
      joinPath(projectDir, 'package.json'),
      JSON.stringify(pkgJson, null, 2),
    );
  } catch (error) {
    outputDebug(
      'Could not remove TS dependencies from package.json:\n' +
        (error as Error).stack,
    );
  }

  // Remove TS from ESLint
  try {
    const eslintrcPath = joinPath(projectDir, '.eslintrc.js');
    let eslintrc = await readFile(eslintrcPath);

    eslintrc = eslintrc
      .replace(/\/\*\*[\s*]+@type.+\s+\*\/\s?/gim, '')
      .replace(/\s*,?\s*['"`]plugin:hydrogen\/typescript['"`]/gim, '')
      .replace(/\s+['"`]@typescript-eslint\/.+,/gim, '');

    await writeFile(eslintrcPath, eslintrc);
  } catch (error) {
    outputDebug(
      'Could not remove TS rules from .eslintrc:\n' + (error as Error).stack,
    );
  }
}
