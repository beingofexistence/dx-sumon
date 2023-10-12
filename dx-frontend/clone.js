


let frontend_frameworks = {
    "Angular": "https://github.com/angular/angular",
    "Astro": "https://github.com/withastro/astro",
    "Blitz.js": "https://github.com/blitz-js/blitz",
    "Brunch": "https://github.com/brunch/brunch",
    "Create-React-App": "https://github.com/facebook/create-react-app",
    "Docusaurus 2": "https://github.com/facebook/docusaurus",
    "Docusaurus": "https://github.com/facebook/docusaurus",
    "Dojo": "https://github.com/dojo/framework",
    "Eleventy": "https://github.com/11ty/eleventy",
    "Ember": "https://github.com/emberjs/ember.js",
    "Gatsby": "https://github.com/gatsbyjs/gatsby",
    "Gridsome": "https://github.com/gridsome/gridsome",
    "Hexo": "https://github.com/hexojs/hexo",
    "Hugo": "https://github.com/gohugoio/hugo",
    "Hydrogen 2": "https://github.com/Shopify/hydrogen",
    "Hydrogen": "https://github.com/hydrogen-music/hydrogen",
    "ionic-angular": "https://github.com/ionic-team/ionic-framework",
    "ionic-react": "https://github.com/ionic-team/ionic-framework",
    "jekyll": "https://github.com/jekyll/jekyll",
    "middleman": "https://github.com/middleman/middleman",
    "nextjs": "https://github.com/vercel/next.js",
    "nuxtjs": "https://github.com/nuxt/nuxt.js",
    "parcel": "https://github.com/parcel-bundler/parcel",
    "polymer": "https://github.com/Polymer/polymer",
    "preact": "https://github.com/preactjs/preact",
    "redwoodjs": "https://github.com/redwoodjs/redwood",
    "remix": "https://github.com/remix-run/remix",
    "saber": "https://github.com/saberland/saber",
    "sanity": "https://github.com/sanity-io/sanity",
    "sapper": "https://github.com/sveltejs/sapper",
    "scully": "https://github.com/scullyio/scully",
    "solidstart": "https://github.com/solidjs/solid-start",
    "stencil": "https://github.com/ionic-team/stencil",
    "storybook": "https://github.com/storybookjs/storybook",
    "svelte": "https://github.com/sveltejs/svelte",
    "sveltekit-1": "https://kit.svelte.dev",
    "sveltekit": "https://kit.svelte.dev",
    "umijs": "https://github.com/umijs/umi",
    "vite": "https://github.com/vitejs/vite",
    "vitepress": "https://vitepress.vuejs.org",
    "vue": "https://github.com/vuejs/vue-next",
    "vuepress": "https://vuepress.vuejs.org",
    "zola": "https://github.com/getzola/zola"
};
  
// Use a for loop to iterate over the JSON object
for (let key in frontend_frameworks) {
    if (frontend_frameworks.hasOwnProperty(key)) {
        console.log(`\t if git clone ${frontend_frameworks[key]} ${key.toLowerCase()} && cd ${key.toLowerCase()} && rm -rf .git && cd ..; then echo "${key.toUpperCase()} Clone Successfull!!!" else echo "Error, ${key.toUpperCase()} Github Repository Link Has Some Problems" && git status && echo "Trying, To Clone Next Repo" fi`);
    }
}