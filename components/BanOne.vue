<template>
  <div>
    <!-- key: ban-1 -->
    <section class="w-full h-max">
      <div class="h-full swiper ban1">
        <div class="swiper-wrapper">
          <div
            v-for="(card, index) in data"
            :key="index"
            class="w-full h-full overflow-hidden swiper-slide"
          >
            <a v-if="card.route" :href="`/r?route=${card.route}`"
              ><img :src="card.imgSrc" class="object-cover w-full h-full"
            /></a>
            <img v-else :src="card.imgSrc" class="object-cover w-full h-full" />
          </div>
          <!-- <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>-->
          <!-- <div class="ban1-swiper-pagination swiper-pagination"></div> -->
        </div>
      </div>
    </section>
    <!-- key: ban-1 -->
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      // items: [
      //   {
      //     src: "https://assets.ajio.com/cms/TRENDS/WEB/Tiles-Ajio_shirts.jpg",
      //   },
      //   {
      //     src: "https://assets.ajio.com/cms/TRENDS/WEB/Tiles-Ajio_shorts.jpg",
      //   },
      //   {
      //     src: "https://assets.ajio.com/cms/TRENDS/WEB/Tiles-Ajio_kurtis.jpg",
      //   },
      //   {
      //     src: "https://assets.ajio.com/cms/TRENDS/WEB/Tiles-Ajio_t-shirt.jpg",
      //   },
      //   {
      //     src: "https://assets.ajio.com/cms/TRENDS/WEB/Tiles-Ajio_jeans.jpg",
      //   },
      //   {
      //     src: "https://assets.ajio.com/cms/TRENDS/WEB/Tiles-Ajio_shirts.jpg",
      //   },
      //   {
      //     src: "https://assets.ajio.com/cms/TRENDS/WEB/Tiles-Ajio_shorts.jpg",
      //   },
      //   {
      //     src: "https://assets.ajio.com/cms/TRENDS/WEB/Tiles-Ajio_kurtis.jpg",
      //   },
      //   {
      //     src: "https://assets.ajio.com/cms/TRENDS/WEB/Tiles-Ajio_t-shirt.jpg",
      //   },
      //   {
      //     src: "https://assets.ajio.com/cms/TRENDS/WEB/Tiles-Ajio_jeans.jpg",
      //   },
      // ],
      swipers: {
        ban1: null,
      },
    };
  },
  mounted() {
    this.swipers.ban1 = new window.Swiper(".ban1", {
      spaceBetween: 30,
      effect: "fade",
      hashNavigation: {
        watchState: true,
      },
      pagination: {
        el: ".ban1-swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  },
};
</script>
