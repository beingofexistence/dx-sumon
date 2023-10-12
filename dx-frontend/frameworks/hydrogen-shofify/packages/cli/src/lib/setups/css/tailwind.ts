import {outputInfo} from '@shopify/cli-kit/node/output';
import {joinPath, relativePath} from '@shopify/cli-kit/node/path';
import {canWriteFiles, copyAssets, mergePackageJson} from './assets.js';
import {getCodeFormatOptions} from '../../format-code.js';
import type {CssSetupConfig, CssSetupResult} from './common.js';
import {replaceRemixConfig, replaceRootLinks} from './replacers.js';

const tailwindCssPath = 'styles/tailwind.css';

export async function setupTailwind(
  {rootDirectory, appDirectory, ...futureOptions}: CssSetupConfig,
  force = false,
): Promise<undefined | CssSetupResult> {
  const relativeAppDirectory = relativePath(rootDirectory, appDirectory);

  const assetMap = {
    'tailwind.config.js': 'tailwind.config.js',
    'postcss.config.js': 'postcss.config.js',
    'tailwind.css': joinPath(relativeAppDirectory, tailwindCssPath),
  } as const;

  if (futureOptions.tailwind && futureOptions.postcss) {
    outputInfo(`Tailwind and PostCSS are already setup in ${rootDirectory}.`);
    return;
  }

  if (!(await canWriteFiles(assetMap, appDirectory, force))) {
    outputInfo(
      `Skipping CSS setup as some files already exist. You may use \`--force\` or \`-f\` to override it.`,
    );

    return;
  }

  const workPromise = Promise.all([
    mergePackageJson('tailwind', rootDirectory),
    copyAssets('tailwind', assetMap, rootDirectory, (content, filepath) =>
      filepath === 'tailwind.config.js'
        ? content.replace('{src-dir}', relativeAppDirectory)
        : content,
    ),
    getCodeFormatOptions(rootDirectory).then((formatConfig) =>
      Promise.all([
        replaceRemixConfig(rootDirectory, formatConfig, {
          tailwind: true,
          postcss: true,
        }),
        replaceRootLinks(appDirectory, formatConfig, {
          name: 'tailwindCss',
          path: tailwindCssPath,
          isDefault: true,
        }),
      ]),
    ),
  ]);

  return {
    workPromise,
    generatedAssets: Object.values(assetMap),
    helpUrl: 'https://tailwindcss.com/docs/configuration',
  };
}
