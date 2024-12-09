<template>
  <div>
    <!-- key: lay-1 -->
    <section class="px-4 py-10 bg-black lg:py-20 lg:px-20">
      <div class="max-w-[450px] mx-auto md:max-w-none xl:max-w-7xl">
        <div>
          <h1
            class="mb-10 text-3xl w-[70%] font-black md:text-4xl text-white md:w-[50%] lg:text-6xl"
          >
            {{ data.sectionTitle }}
          </h1>
        </div>
        <div class="grid gap-4 lg:gap-[100px] md:justify-between md:flex">
          <div class="flex gap-4 md:flex-col md:w-[25%]">
            <div
              class="h-[300px] w-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border md:w-full hover:w-full hover:h-[400px] md:hover:h-[300px] md:hover:scale-110 transition-[0.5s]"
            >
              <NuxtLink
                :to="`/p?keyword=${data.items.one.keyword}&category=${
                  data.items.one.categoryId
                }&subCategory=${
                  data.items.one.subCategoryId
                }&priceRange=${getParsedPriceRange(
                  data.items.one.normalPriceRange
                )}&sort=${data.items.one.sort}`"
              >
                <img
                  :src="data.items.one.imgSrc"
                  class="object-cover w-full h-full"
                />
              </NuxtLink>
            </div>
            <div
              class="h-[300px] w-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border md:w-full hover:w-full hover:h-[400px] md:hover:h-[300px] md:hover:scale-110 transition-[0.5s]"
            >
              <NuxtLink
                :to="`/p?keyword=${data.items.two.keyword}&category=${
                  data.items.two.categoryId
                }&subCategory=${
                  data.items.two.subCategoryId
                }&priceRange=${getParsedPriceRange(
                  data.items.two.normalPriceRange
                )}&sort=${data.items.two.sort}`"
              >
                <img
                  :src="data.items.two.imgSrc"
                  class="object-cover w-full h-full"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="flex justify-center row-span-2 md:w-[50%]">
            <div
              class="h-[300px] w-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border md:w-full md:h-full hover:w-full hover:h-[600px] md:hover:h-full md:hover:scale-110 transition-[0.5s]"
            >
              <NuxtLink
                :to="`/p?keyword=${data.items.three.keyword}&category=${
                  data.items.three.categoryId
                }&subCategory=${
                  data.items.three.subCategoryId
                }&priceRange=${getParsedPriceRange(
                  data.items.three.normalPriceRange
                )}&sort=${data.items.three.sort}`"
              >
                <img
                  :src="data.items.three.imgSrc"
                  class="object-cover w-full h-full"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="flex gap-4 md:flex-col md:w-[25%]">
            <div
              class="h-[300px] w-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border md:w-full hover:w-full hover:h-[400px] md:hover:h-[300px] md:hover:scale-110 transition-[0.5s]"
            >
              <NuxtLink
                :to="`/p?keyword=${data.items.four.keyword}&category=${
                  data.items.four.categoryId
                }&subCategory=${
                  data.items.four.subCategoryId
                }&priceRange=${getParsedPriceRange(
                  data.items.four.normalPriceRange
                )}&sort=${data.items.four.sort}`"
              >
                <img
                  :src="data.items.four.imgSrc"
                  class="object-cover w-full h-full"
                />
              </NuxtLink>
            </div>
            <div
              class="h-[300px] w-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border md:w-full hover:w-full hover:h-[400px] md:hover:h-[300px] md:hover:scale-110 transition-[0.5s]"
            >
              <NuxtLink
                :to="`/p?keyword=${data.items.five.keyword}&category=${
                  data.items.five.categoryId
                }&subCategory=${
                  data.items.five.subCategoryId
                }&priceRange=${getParsedPriceRange(
                  data.items.five.normalPriceRange
                )}&sort=${data.items.five.sort}`"
              >
                <img
                  :src="data.items.five.imgSrc"
                  class="object-cover w-full h-full"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- key: lay-1 -->
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    getParsedPriceRange(priceRange) {
      if (!priceRange) return null;
      return `${priceRange[0]}-${priceRange[1]}`;
    },
  },
};
</script>
