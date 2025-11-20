// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss', '@pinia/nuxt'
    ],
    css: ['~/assets/css/main.css'],
    app: {
      head: {
        title: 'Wortspile - Verbessere dein Tippgeschwindigkeit',
        meta: [
          { charset: 'utf-8' },
          { name: 'description', content: 'Übe deine 10-Finger Tippfähigkeiten mit unserem Wortspiel. Tritt an und erreiche die höchste Punktzahl!' },
          { name: 'keywords', content: 'Tippspiel, 10-Finger-Tippen, Tippübungen, Tippgeschwindigkeit'},
        ]
      }
    }
})
