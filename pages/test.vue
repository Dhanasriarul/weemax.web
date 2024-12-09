<template>
  <div>
    <h1>Test</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$http.$get("/status").then((res) => {
      console.log(res);
    });
  },
};
</script>
