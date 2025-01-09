// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
  css: ['primeicons/primeicons.css'],

  //postcss: {
  //tailwindcss: {},
  //autoprefixer:{}
  //},
  primevue: {
      options: {
          unstyled:false,
          theme: {
              preset: Aura,
          },
          ripple: true,
          
      },
      usePrimeVue:true,
      autoImport: false,
      components: {
          include:['Button','InputText', 'InputMask','Dialog','MegaMenu','Menubar','MultiSelect','VirtualScroller','InputNumber','DataTable','Column']
      },
      //directives: {
          //include: '*',
          //exclude:['Ripple']
      //}     
  },

  app: {
      head: {
          meta: [
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { charset: 'utf-8' }
          ],
          script: [
              { src: '/project-main.js', type: 'text/javascript' }
          ],
          link: [
              { rel: 'stylesheet', href: '/project-main.css' } // Add your CSS file here
          ]
      }
    },
  plugins: [
    '~/plugins/error-handler.js'
  ],

  compatibilityDate: '2024-12-16'
});