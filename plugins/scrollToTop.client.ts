import { defineNuxtPlugin } from '#app';
import { useRouter, useRoute } from 'vue-router';

export default defineNuxtPlugin(() => {
  const router = useRouter();
  const route = useRoute();

  router.afterEach((to, from) => {
    if (to.path === from.path && to.fullPath !== from.fullPath) {
      // Scroll to top if only query params changed
      window.scrollTo(0, 0);
    }
  });
});