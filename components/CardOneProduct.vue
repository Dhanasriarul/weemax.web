<template>
  <div>
    <!-- key: card-1 -->
    <section class="w-full px-4 py-10 overflow-hidden bg-black">
      <div class="mx-auto max-w-7xl">
        <div>
          <h1
            class="mb-10 text-white text-3xl w-[70%] font-black md:text-4xl md:w-[50%] lg:text-6xl"
          >
            {{ data.sectionTitle }}
          </h1>
        </div>
        <div
          class="relative flex flex-col items-center justify-center gap-4 h-max lg:flex-row"
        >
          <div
            class="relative group rounded-2xl w-full h-[200px] lg:h-[350px] flex justify-start items-center bg-gradient-to-tr from-[#1a2f3f] to-[#7094ce]"
          >
            <div
              class="relative w-1/2 left-[20%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-0 p-5 pl-10 transition-[0.5s]"
            >
              <h2 class="text-white uppercase text-4xl leading-[1em]">
                <NuxtLink
                  :to="`/p?keyword=${data.items.one.keyword}&category=${
                    data.items.one.categoryId
                  }&subCategory=${
                    data.items.one.subCategoryId
                  }&priceRange=${getParsedPriceRange(
                    data.items.one.normalPriceRange
                  )}&sort=${data.items.one.sort}`"
                  >{{ data.items.one.name }}</NuxtLink
                >
              </h2>
            </div>
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
                class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[220px] lg:h-[400px] transition-[0.5s] group-hover:left-[73%] group-hover:h-[250px] lg:group-hover:h-[500px]"
                :src="data.items.one.imgSrc"
                alt=""
            /></NuxtLink>

            <div class="absolute top-3 right-3 group-hover:hidden">
              <div
                class="w-20 h-20 border-white border-solid rounded-full animate-spin border-y-2 border-t-transparent"
              ></div>
              <p
                class="absolute text-xs font-bold text-center -translate-x-1/2 -translate-y-1/2 text-white/50 top-1/2 left-1/2"
              >
                Hover Me
              </p>
            </div>
          </div>
          <div
            class="relative group rounded-2xl w-full h-[200px] lg:h-[350px] flex justify-start items-center bg-gradient-to-tr from-[#1a2f3f] to-[#7094ce]"
          >
            <div
              class="relative w-1/2 left-[20%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:left-0 p-5 pl-10 transition-[0.5s]"
            >
              <h2 class="text-white uppercase text-4xl leading-[1em]">
                <NuxtLink
                  :to="`/p?keyword=${data.items.two.keyword}&category=${
                    data.items.two.categoryId
                  }&subCategory=${
                    data.items.two.subCategoryId
                  }&priceRange=${getParsedPriceRange(
                    data.items.two.normalPriceRange
                  )}&sort=${data.items.two.sort}`"
                  >{{ data.items.two.name }}</NuxtLink
                >
              </h2>
            </div>
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
                class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[220px] lg:h-[400px] transition-[0.5s] group-hover:left-[73%] group-hover:h-[250px] lg:group-hover:h-[500px]"
                :src="data.items.two.imgSrc"
                alt=""
            /></NuxtLink>

            <div class="absolute top-3 right-3 group-hover:hidden">
              <div
                class="w-20 h-20 border-white border-solid rounded-full animate-spin border-y-2 border-t-transparent"
              ></div>
              <p
                class="absolute text-xs font-bold text-center -translate-x-1/2 -translate-y-1/2 text-white/50 top-1/2 left-1/2"
              >
                Hover Me
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- key: card-1 -->
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
