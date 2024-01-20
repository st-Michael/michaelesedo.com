// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  pages: true,
  components: true,
 css: ["~/assets/css/app.css", "~/assets/css/fonts.css", "~/assets/css/form.css", "~/assets/css/utility.css", "~/assets/css/variables.css"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Michael Esedo",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Software Engineer | AI/NLP Engineer | Solutions Architect | Mentor",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#53ff70" },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://michaelesedo.com/ogimage.png`,
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/logo.png" },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css",
        },
      ],
      script: [
        {
          hid: "ajax",
          src: "https://cdnjs.cloudflare.com/ajax/libs/es6-promise/3.0.2/es6-promise.min.js",
        },
        {
          hid: "ajax",
          src: "https://cdnjs.cloudflare.com/ajax/libs/fetch/0.10.1/fetch.min.js",
        },
        {
          hid: "linkedin badge",
          src: "https://platform.linkedin.com/badges/js/profile.js",
        },
        {
          hid: "github calendar",
          src: "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js",
        },
        {
          hid: "github calendar",
          src: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.0.0/highlight.min.js",
        },
      ],
  
    }
  }
})