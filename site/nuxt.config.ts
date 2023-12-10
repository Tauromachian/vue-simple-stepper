export default defineNuxtConfig({
  app: {
    head: {
      title: "Stepper",
      htmlAttrs: {
        lang: "en"
      },

      meta: [
        { name: "author", content: "jogarcia" },
        {
          hid: "description",
          name: "description",
          content: "Stepper made with Vuejs"
        },
        {
          name: "keywords",
          content: "stepper, vue"
        },
        { property: "og:title", content: "Stepper" },
        { property: "og:site_name", content: "Stepper" },
        {
          property: "og:description",
          content: "Stepper made with Vuejs"
        },
        {
          property: "og:keywords",
          content: "stepper, vue"
        },
        { property: "og:author", content: "jogarcia" },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "https://stepper.jose-garcia.net/"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "favicon.ico"
        },
        { property: "og:image:alt", content: "Image of the portfolio" },
        { property: "og:image:size", content: "300" },
        { property: "og:locale", content: "en_US" },
        { property: "og:locale:alternate", content: "es_ES" },
        { property: "og:copyright", content: "Portfolio jogarcia" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "website-logo-min.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com/" },
        { rel: "preconnect", href: "https://fonts.gstatic.com/" },
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com/" },
        { rel: "dns-prefetch", href: "https://fonts.gstatic.com/" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Catamaran:wght@500&family=Nunito+Sans:wght@500&display=swap&text=ABCDEFGHIJKLMNOPQRSTUVWXYZáéíóúabcdefghijklmnopqrstuvwxyz0123456789./',"
        }
      ]
    }
  },

  css: ["normalize.css", "~/assets/scss/main.scss"]
});
