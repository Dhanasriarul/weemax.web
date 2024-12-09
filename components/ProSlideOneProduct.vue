<template>
  <div>
    <!-- key: pro-slide-1 -->
    <section class="w-full h-auto py-10 lg:py-20 lg:px-0">
      <div
        class="flex items-center justify-between w-full h-auto px-4 mb-10 lg:px-20"
      >
        <h1 class="text-xl font-bold md:text-2xl lg:text-4xl">
          {{ data.sectionTitle }}
        </h1>
        <div class="flex gap-3 lg:gap-5">
          <div
            class="proslide1-prev-btn flex items-center justify-center w-10 h-10 lg:h-14 lg:w-14 min-w-[40px] lg:min-w-[56px] bg-blue-400 rounded-full"
          >
            <i class="text-white fa-solid fa-arrow-left lg:text-xl"></i>
          </div>
          <div
            class="proslide1-nxt-btn flex items-center justify-center w-10 h-10 lg:h-14 lg:w-14 min-w-[40px] lg:min-w-[56px] bg-blue-400 rounded-full"
          >
            <i class="text-white fa-solid fa-arrow-right lg:text-xl"></i>
          </div>
        </div>
      </div>
      <div class="px-4 swiper proslide1 lg:px-20">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in data.items"
            :key="index"
            class="swiper-slide w-[272px] pb-3"
          >
            <div
              class="h-[360px] w-[272px] rounded-2xl overflow-hidden shadow-lg"
            >
              <NuxtLink
                :to="`/p?keyword=${item.keyword}&category=${
                  item.categoryId
                }&subCategory=${
                  item.subCategoryId
                }&priceRange=${getParsedPriceRange(
                  item.normalPriceRange
                )}&sort=${item.sort}`"
              >
                <img
                  :src="item.imgSrc"
                  class="object-cover w-full h-full"
                  alt=""
                />
              </NuxtLink>
            </div>
            <div
              class="w-[175px] h-16 bg-white relative left-1/2 -translate-x-1/2 rounded-2xl -mt-[30px] shadow-md flex justify-center items-center flex-col"
            >
              <NuxtLink
                :to="`/p?keyword=${item.keyword}&category=${
                  item.categoryId
                }&subCategory=${
                  item.subCategoryId
                }&priceRange=${getParsedPriceRange(
                  item.normalPriceRange
                )}&sort=${item.sort}`"
              >
                <p class="text-xl font-black text-[#5F98EF]">
                  ₹{{ item.price }}
                  <span class="text-xs">{{ item.label }}</span>
                </p>
              </NuxtLink>
              <NuxtLink
                :to="`/p?keyword=${item.keyword}&category=${
                  item.categoryId
                }&subCategory=${
                  item.subCategoryId
                }&priceRange=${getParsedPriceRange(
                  item.normalPriceRange
                )}&sort=${item.sort}`"
              >
                <h2 class="text-sm font-bold">{{ item.caption }}</h2>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- key: pro-slide-1 -->
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      swipers: {
        proslide1: null,
      },
    };
  },
  mounted() {
    this.swipers.proslide1 = new window.Swiper(".proslide1", {
      slidesPerView: "auto",
      spaceBetween: 15,
      navigation: {
        nextEl: ".proslide1-nxt-btn",
        prevEl: ".proslide1-prev-btn",
      },
    });
  },
  methods: {
    getParsedPriceRange(priceRange) {
      if (!priceRange) return null;
      return `${priceRange[0]}-${priceRange[1]}`;
    },
  },
};
</script>
