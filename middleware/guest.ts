import { useAuthStore } from "~/stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  if (auth.isLoggedIn) {
    if (process.server) return navigateTo('/');

    return navigateTo('/', { replace: true });
  }
})