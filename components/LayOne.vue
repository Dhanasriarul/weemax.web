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
              <a :href="`/r?route=${data.items.one.route}`">
                <img
                  :src="data.items.one.imgSrc"
                  class="object-cover w-full h-full"
                />
              </a>
            </div>
            <div
              class="h-[300px] w-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border md:w-full hover:w-full hover:h-[400px] md:hover:h-[300px] md:hover:scale-110 transition-[0.5s]"
            >
              <a :href="`/r?route=${data.items.two.route}`">
                <img
                  :src="data.items.two.imgSrc"
                  class="object-cover w-full h-full"
                />
              </a>
            </div>
          </div>
          <div class="flex justify-center row-span-2 md:w-[50%]">
            <div
              class="h-[300px] w-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border md:w-full md:h-full hover:w-full hover:h-[600px] md:hover:h-full md:hover:scale-110 transition-[0.5s]"
            >
              <a :href="`/r?route=${data.items.three.route}`">
                <img
                  :src="data.items.three.imgSrc"
                  class="object-cover w-full h-full"
                />
              </a>
            </div>
          </div>
          <div class="flex gap-4 md:flex-col md:w-[25%]">
            <div
              class="h-[300px] w-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border md:w-full hover:w-full hover:h-[400px] md:hover:h-[300px] md:hover:scale-110 transition-[0.5s]"
            >
              <a :href="`/r?route=${data.items.four.route}`">
                <img
                  :src="data.items.four.imgSrc"
                  class="object-cover w-full h-full"
                />
              </a>
            </div>
            <div
              class="h-[300px] w-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border md:w-full hover:w-full hover:h-[400px] md:hover:h-[300px] md:hover:scale-110 transition-[0.5s]"
            >
              <a :href="`/r?route=${data.items.five.route}`">
                <img
                  :src="data.items.five.imgSrc"
                  class="object-cover w-full h-full"
                />
              </a>
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
};
</script>
