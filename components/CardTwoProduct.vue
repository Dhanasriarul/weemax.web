<template>
  <div>
    <!-- key: card-2 -->
    <section class="bg-black">
      <div class="px-4 py-10 mx-auto max-w-7xl">
        <div>
          <h1
            class="mb-10 text-3xl w-[70%] text-white font-black md:text-4xl md:w-[50%] lg:text-6xl"
          >
            {{ data.sectionTitle }}
          </h1>
        </div>
        <div class="flex gap-3 h-[300px] w-fullmd:h-[500px] lg:h-[650px]">
          <div
            v-for="(card, index) in expandCards"
            :key="index"
            class="h-full bg-red-300 transition-[0.5s] rounded-2xl overflow-hidden"
            :class="card.isActive ? 'w-[100%]' : 'w-[20%]'"
          >
            <div @click="changeExpandCard(index)" class="w-full h-full">
              <NuxtLink
                :to="`/p?keyword=${card.keyword}&category=${
                  card.categoryId
                }&subCategory=${
                  card.subCategoryId
                }&priceRange=${getParsedPriceRange(
                  card.normalPriceRange
                )}&sort=${card.sort}`"
              >
                <img
                  :src="card.imgSrc"
                  class="object-cover w-full h-full"
                  alt=""
              /></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- key: card-2 -->
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      expandCards: [],
    };
  },
  mounted() {
    this.expandCards = this.data.banners;
    // Call the function after 1 second
    setInterval(() => {
      this.changeActiveCard();
    }, 1000);
  },
  methods: {
    getParsedPriceRange(priceRange) {
      if (!priceRange) return null;
      return `${priceRange[0]}-${priceRange[1]}`;
    },
    changeExpandCard(index) {
      for (let i = 0; i < this.expandCards.length; i++) {
        this.expandCards[i].isActive = false;
      }

      this.expandCards[index].isActive = true;
    },
    changeActiveCard() {
      let nextActiveIndex = this.expandCards.findIndex(
        (card) => card.isActive === true
      );
      if (nextActiveIndex === -1) {
        // If no active card is found, set the first card as active
        nextActiveIndex = 0;
      } else {
        // Set the current active card as false
        this.expandCards[nextActiveIndex].isActive = false;

        // Find the next active card index in a circular manner
        nextActiveIndex = (nextActiveIndex + 1) % this.expandCards.length;
      }

      // Set the next card as active
      this.expandCards[nextActiveIndex].isActive = true;
    },
  },
};
</script>
