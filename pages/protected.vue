<template>
  <div>
    <h1>Protected</h1>
  </div>
</template>
<script>
definePageMeta({
  middleware: ["auth"],
});
export default {
  mounted() {
    // this.authCheck();
  },
  methods: {
    // authCheck() {
    //   const token = window.localStorage.getItem("weemaxAccessToken");
    //   let expTime = window.localStorage.getItem("weemaxAccessTokenExp");
    //   expTime = Math.floor(new Date(expTime).getTime() / 1000);
    //   let currentTime = Math.floor(Date.now() / 1000);
    //   if (token) {
    //     if (expTime < currentTime) {
    //       window.location.href = "/";
    //     }
    //   } else {
    //     window.location.href = "/";
    //   }
    // },
  },
};
</script>
