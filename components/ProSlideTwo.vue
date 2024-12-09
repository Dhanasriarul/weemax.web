<template>
  <div>
    <!-- key: pro-slide-2 -->
    <section class="h-auto w-full bg-[#5F98EF] py-8">
      <div class="flex w-full h-auto overflow-hidden flex-nowrap mb-9">
        <div class="scroll">
          <div class="righttoleft-slow lg:righttoleft-fast">
            <div v-for="n in 20" :key="n">
              <span
                class="font-bold text-[40px] whitespace-nowrap"
                :class="
                  n % 2 == 0
                    ? 'text-stroke-white text-transparent'
                    : 'text-white'
                "
              >
                {{ data.sectionTitle }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="relative px-4 swiper proslide2 lg:px-20">
        <div class="z-0 swiper-wrapper">
          <div
            v-for="(item, index) in data.items"
            :key="index"
            class="swiper-slide max-w-max"
          >
            <a :href="`/r?route=${item.route}`">
              <div
                class="swiper-slide h-[200px] w-[200px] overflow-hidden min-w-[200px] aspect-square bg-white rounded-2xl"
              >
                <img
                  :src="item.imgSrc"
                  class="object-cover w-full h-full"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>

        <div
          class="hidden md:flex absolute justify-center items-center proslide2-prev-btn2 w-10 h-10 -translate-y-1/2 bg-white rounded-full left-4 top-1/2 z-[99999] shadow-lg border border-[#5F98EF]"
        >
          <i class="fa-solid fa-arrow-left text-[#5F98EF]"></i>
        </div>
        <div
          class="hidden md:flex absolute justify-center items-center proslide2-nxt-btn2 w-10 h-10 -translate-y-1/2 bg-white rounded-full right-4 top-1/2 z-[99999] shadow-lg border border-[#5F98EF]"
        >
          <i class="fa-solid fa-arrow-right text-[#5F98EF]"></i>
        </div>
      </div>
    </section>
    <!-- key: pro-slide-2 -->
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      swipers: {
        proslide2: null,
      },
    };
  },
  mounted() {
    this.swipers.proslide2 = new window.Swiper(".proslide2", {
      slidesPerView: "auto",
      spaceBetween: 15,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".proslide2-nxt-btn2",
        prevEl: ".proslide2-prev-btn2",
      },
    });
  },
};
</script>

<style scoped>
.scroll {
  white-space: nowrap;
  margin: 0 2em;
}

.scroll div {
  display: flex;
  gap: 54px;
}

.scroll p {
  font-size: 40px;
  color: white;
  font-weight: bold;
  margin-bottom: 0;
}

.righttoleft-fast {
  animation: RightToLeft 10s infinite linear;
}

.righttoleft-slow {
  animation: RightToLeft 15s infinite linear;
}

@keyframes RightToLeft {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
