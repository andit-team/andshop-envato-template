export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  publicRuntimeConfig: {
    APP_NAME: process.env.APP_NAME,
    APP_URL: process.env.APP_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    ECOMMERCE_URL: process.env.ECOMMERCE_URL,
    KRISHI_BAAZAR_URL: process.env.KRISHI_BAAZAR_URL,
    AUCTION_URL: process.env.AUCTION_URL,
    SME_URL: process.env.SME_URL,
    MERCHANT_PANEL_URL: process.env.MERCHANT_PANEL_URL,
    VENDOR_PANEL_URL: process.env.VENDOR_PANEL_URL,
    AGENT_PANEL_URL: process.env.AGENT_PANEL_URL,
    CUSTOMER_PANEL_URL: process.env.CUSTOMER_PANEL_URL
  },

  privateRuntimeConfig: {
    apiSecret: process.env.GOOGLE_MAP_API_KEY
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Andshop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Martel+Sans:wght@200;300;400;600;700;800;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#c9151b', throttle: 200, height: '3px', css: true },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/app.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/plugin.js', ssr:false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'vue-scrollto/nuxt',
    '@nuxtjs/axios',
  ],

  axios: {
    proxy: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  }
}
