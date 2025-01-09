export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    console.error('Global Vue error:', error);
    nuxtApp.$router.push({ path: '/error', query: { message: error.message } });
  };

  nuxtApp.hook('app:error', (error) => {
    console.error('Global Nuxt error:', error);
    nuxtApp.$router.push({ path: '/error', query: { message: error.message } });
  });
});
