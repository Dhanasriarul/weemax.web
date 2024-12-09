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
                <a :href="`/r?route=${data.items.one.route}`">{{
                  data.items.one.name
                }}</a>
              </h2>
            </div>
            <a :href="`/r?route=${data.items.one.route}`">
              <img
                class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[220px] lg:h-[400px] transition-[0.5s] group-hover:left-[73%] group-hover:h-[250px] lg:group-hover:h-[500px]"
                :src="data.items.one.imgSrc"
                alt=""
            /></a>

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
                <a :href="`/r?route=${data.items.two.route}`">{{
                  data.items.two.name
                }}</a>
              </h2>
            </div>
            <a :href="`/r?route=${data.items.two.route}`">
              <img
                class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[220px] lg:h-[400px] transition-[0.5s] group-hover:left-[73%] group-hover:h-[250px] lg:group-hover:h-[500px]"
                :src="data.items.two.imgSrc"
                alt=""
            /></a>

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
};
</script>
