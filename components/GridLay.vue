<template>
  <div>
    <!-- key: grid-lay -->
    <section class="px-4 py-10">
      <div class="mx-auto md:max-w-none xl:max-w-7xl">
        <div v-if="data.sectionTitle">
          <h1
            class="mb-10 text-3xl w-[70%] font-black md:text-4xl text-black md:w-[50%] lg:text-6xl"
          >
            {{ data.sectionTitle }}
          </h1>
        </div>
        <div :class="`grid gap-4 lg:grid-cols-${data.columns}`">
          <div
            v-for="(item, index) in data.banners"
            :key="index"
            class="w-full h-auto overflow-hidden bg-red-400 rounded-2xl"
          >
            <a :href="`/r?route=${item.route}`">
              <img :src="item.imgSrc" class="object-cover w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- key: grid-lay -->
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>
