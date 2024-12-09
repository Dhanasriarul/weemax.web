<template>
  <div>
    <!-- key: card-3 -->
    <section class="py-5 overflow-hidden bg-black">
      <div class="px-4 py-10 mx-auto max-w-7xl lg:flex">
        <div>
          <h1
            class="mb-10 text-3xl lg:w-full w-[70%] text-white font-black md:text-4xl md:w-[50%] lg:text-6xl"
          >
            {{ data.sectionTitle }}
          </h1>
        </div>
        <div class="w-full h-max">
          <div
            class="swiper card3 w-[240px] h-[320px] md:h-[500px] md:w-[350px]"
          >
            <div class="swiper-wrapper">
              <div
                v-for="(card, index) in cards"
                :key="index"
                class="overflow-hidden bg-gray-300 shadow-lg swiper-slide rounded-2xl"
              >
                <img
                  :src="card.imgSrc"
                  class="object-cover w-full h-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- key: card-3 -->
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      swipers: {
        card3: null,
      },
      cards: [],
    };
  },
  mounted() {
    this.cards = this.data.banners;

    this.swipers.card3 = new window.Swiper(".card3", {
      effect: "cards",
      grabCursor: true,
    });
  },
};
</script>
