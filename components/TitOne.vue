<template>
  <div>
    <!-- key: tit-1 -->
    <section class="px-4 md:px-[60px] lg:px-[80px] my-5">
      <h1 class="text-5xl font-black sm:text-7xl lg:text-9xl">
        <span class="text-stroke-black">{{ data.textOne }}</span
        ><br />
        {{ data.textTwo }}
      </h1>
    </section>
    <!-- key: tit-1 -->
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.text-stroke-black {
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>
