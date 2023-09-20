import {useAuthStore} from "~/stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return
  const auth = useAuthStore();

  if (!auth.isLoggedIn) {
    return navigateTo("/login", {replace: true});
  }
})