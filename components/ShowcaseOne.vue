<template>
  <div>
    <!-- key: showcase-1 -->
    <section class="relative px-4 pt-10 lg:pt-20 lg:px-20">
      <div
        class="bottom-0 left-0 h-[65%] w-[80%] bg-[#1aa7ec] absolute z-0"
      ></div>
      <div class="z-[999] relative">
        <h1
          class="mb-10 text-3xl w-[70%] font-black md:text-4xl md:w-[50%] lg:text-6xl"
        >
          Best Travel Experience Within the Universe.
        </h1>
        <div class="h-[450px] w-full md:flex md:justify-end">
          <div class="w-full h-full swiper showcase1 md:w-[80%] m-0">
            <div class="swiper-wrapper">
              <div
                v-for="n in 10"
                :key="n"
                class="swiper-slide h-[450px] w-[336px] bg-red-800 relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  class="object-cover w-full h-full"
                  alt=""
                />

                <div
                  class="absolute bottom-0 left-0 flex flex-col justify-end w-full h-full p-3 bg-black/20"
                >
                  <h1 class="text-2xl font-black text-white">Dress Text</h1>
                  <p
                    class="text-ellipsis overflow-hidden whitespace-nowrap w-[70%] text-white"
                  >
                    Dress Caption Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Omnis ipsa impedit itaque sunt harum ipsam
                    quos, earum nostrum dolore quisquam?
                  </p>
                  <div class="flex justify-end gap-3 mt-3">
                    <div
                      class="flex items-center justify-center w-10 h-10 transition bg-white rounded-full hover:scale-110"
                    >
                      <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div
                      class="flex items-center justify-center w-10 h-10 transition bg-white rounded-full hover:scale-110"
                    >
                      <i class="fa-regular fa-heart"></i>
                    </div>
                    <div
                      class="flex items-center justify-center h-10 px-6 font-bold transition bg-white rounded-full w-max hover:scale-110"
                    >
                      Buy Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end w-full gap-3 mt-5 lg:gap-5">
          <div
            class="showcase1-prev-btn3 flex items-center justify-center w-10 h-10 lg:h-14 lg:w-14 min-w-[40px] lg:min-w-[56px] bg-[#1aa7ec] rounded-full border border-white"
          >
            <i class="text-black fa-solid fa-arrow-left lg:text-xl"></i>
          </div>
          <div
            class="showcase1-nxt-btn3 flex items-center justify-center w-10 h-10 lg:h-14 lg:w-14 min-w-[40px] lg:min-w-[56px] bg-[#1aa7ec] rounded-full border border-white"
          >
            <i class="text-black fa-solid fa-arrow-right lg:text-xl"></i>
          </div>
        </div>
      </div>
    </section>
    <!-- key: showcase-1 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipers: {
        showcase1: null,
      },
    };
  },
  mounted() {
    this.swipers.showcase1 = new window.Swiper(".showcase1", {
      slidesPerView: "auto",
      spaceBetween: 15,
      freeMode: true,
      navigation: {
        nextEl: ".showcase1-nxt-btn3",
        prevEl: ".showcase1-prev-btn3",
      },
    });
  },
};
</script>
