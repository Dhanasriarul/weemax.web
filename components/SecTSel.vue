<template>
  <div>
    <!-- key: sec-t-sel -->
    <section class="my-5 sm:hidden">
      <div class="px-4 swiper sectsel">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="max-w-max swiper-slide"
          >
            <a :href="`/r?route=${item.route}`">
              <div>
                <div
                  class="w-24 h-24 overflow-hidden bg-gray-200 border rounded-full"
                >
                  <img :src="item.imgSrc" class="object-cover w-full h-full" />
                </div>
                <h1 class="mt-1 text-sm font-medium text-center">
                  {{ item.name }}
                </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- key: sec-t-sel -->
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      items: [],
      swipers: {
        sectsel: null,
      },
    };
  },
  mounted() {
    this.items = this.data;
    this.swipers.sectsel = new window.Swiper(".sectsel", {
      slidesPerView: "auto",
      spaceBetween: 15,
    });
  },
};
</script>
