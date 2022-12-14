export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'غَيْثْ',
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      
      { name:'theme-color', content:'#94682A' },
      { name: 'msapplication-navbutton-color', content: '#94682A' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#94682A' },
      
      // Primary Meta Tags
      { name: 'description', content: 'غيث هو موقع ألكتروني يحتضن عدة مشاريع رقمية تخدم الإسلام' },
      //Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property:'og:url', content:'https://gheyth.github.io/'},
      { property:'og:title', content:'حَاضِنَةُ غَيْثٍ'},
      { property:'og:description', content:'غيث هو موقع ألكتروني يحتضن عدة مشاريع رقمية تخدم الإسلام'},
      { property:'og:image', content:'assets/img/meta.png'},
      //Twitter
      { property:'twitter:card', content:'summary_large_image'},
      { property:'twitter:url', content:'https://gheyth.github.io/'},
      { property:'twitter:title', content:'حَاضِنَةُ غَيْثٍ'},
      { property:'twitter:description', content:'غيث هو موقع ألكتروني يحتضن عدة مشاريع رقمية تخدم الإسلام'},
      { property:'twitter:image', content:'assets/img/meta.png'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/sidraweb/flaticon-uicons@V1.0.0/uicons.css' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/1a4bb73a43.js', crossorigin: 'anonymous' },
      { src: '/assets/js/index.js', async: true, defer: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@./assets/css/index.css',
    '@./assets/css/main.css',
    '@./assets/css/media.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    publicPath: '/nuxt/'
  }
}
