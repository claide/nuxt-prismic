const PrismicConfig = require("./prismic.config");

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Francis Magallen",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A Front-end & UI Developer based in Davao City, Philippines"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "Francis Magallen"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Francis Magallen"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "A Front-end & UI Developer based in Davao City, Philippines"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Francis Magallen"
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "A Front-end & UI Developer based in Davao City, Philippines"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:400,700&display=swap"
      }
    ],
    script: [
      {
        innerHTML:
          '{ window.prismic = { endpoint: "' +
          PrismicConfig.apiEndpoint +
          '"} }'
      },
      { src: "//static.cdn.prismic.io/prismic.min.js" }
    ],
    __dangerouslyDisableSanitizers: ["script"]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#ffbb03" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/link-resolver.js",
    "~/plugins/html-serializer.js",
    "~/plugins/prismic-vue.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-153086683-1"
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  }
};
