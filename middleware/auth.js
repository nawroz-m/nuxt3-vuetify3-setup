export default defineNuxtRouteMiddleware((to, from) => {
  const route = useRoute();
  if (route.path === "/") {
    console.log("You are currently browsing on home page", route.path);
  }
});
