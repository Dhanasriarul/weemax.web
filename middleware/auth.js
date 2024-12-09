export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = window.localStorage.getItem("weemaxAccessToken");
    let expTime = window.localStorage.getItem("weemaxAccessTokenExp");

    expTime = Math.floor(new Date(expTime).getTime() / 1000);
    let currentTime = Math.floor(Date.now() / 1000);

    if (token) {
      if (expTime < currentTime) {
        window.location.href = "/login";
      }
    } else {
      window.location.href = "/login";
    }
  }
});
