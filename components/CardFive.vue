<template>
  <section class="w-full mx-auto mt-5 max-w-7xl">
    <h1
      v-if="data.sectionTitle"
      class="w-full mb-10 text-3xl font-black text-center text-black md:text-4xl lg:text-6xl"
    >
      {{ data.sectionTitle }}
    </h1>
    <div class="grid w-full grid-cols-2 md:grid-cols-4">
      <div
        v-for="(item, index) in data.banners"
        :key="index"
        class="relative overflow-hidden aspect-square"
      >
        <a :href="`/r?route=${item.route}`">
          <img class="object-cover w-full h-full" :src="item.imgSrc" alt="" />
          <div
            v-if="item.text"
            class="absolute bottom-0 left-0 w-full pb-3 text-xl font-bold text-center text-white"
          >
            {{ item.text }}
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["data"],
};
</script>
