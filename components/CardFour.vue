<template>
  <div>
    <!-- key: card-4 -->
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
          <div class="swiper flipCard h-[200px]">
            <div class="swiper-wrapper">
              <div
                v-for="(card, index) in flipCards"
                :key="index"
                class="swiper-slide max-w-[200px]"
              >
                <a :href="`/r?route=${card.route}`">
                  <img
                    :src="card.imgSrc"
                    class="object-cover w-full h-full overflow-hidden rounded-2xl"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- key: card-4 -->
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      swipers: {
        card4: null,
      },
      flipCards: [],
    };
  },
  mounted() {
    this.flipCards = this.data.banners;
    this.swipers.card4 = new window.Swiper(".flipCard", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });
  },
};
</script>
