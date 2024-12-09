<template>
  <div>
    <!-- key: cat-1 -->
    <section class="bg-[#1aa7ec] px-4 py-10 lg:py-20 lg:px-20">
      <h1 class="mb-5 text-2xl font-black lg:text-5xl lg:mb-10">
        Top Categories
      </h1>
      <div class="lg:flex lg:gap-5">
        <div class="flex flex-col gap-2 lg:w-[200px]">
          <div
            class="flex items-center justify-center w-full py-3 text-lg font-black text-center text-white bg-black"
          >
            Women
          </div>
          <div
            class="flex items-center justify-center w-full py-3 text-lg font-black text-center text-white bg-black"
          >
            Men
          </div>
          <div
            class="flex items-center justify-center w-full py-3 text-lg font-black text-center text-white bg-black"
          >
            Kids
          </div>
        </div>
        <div
          class="grid grid-cols-2 gap-2 mt-5 sm:grid-cols-3 md:grid-cols-4 lg:w-full lg:mt-0"
        >
          <div
            v-for="n in 10"
            :key="n"
            class="w-full h-auto bg-black aspect-square rounded-[20px] overflow-hidden p-2"
          >
            <div class="w-full h-full bg-white rounded-[10px]"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- key: cat-1 -->
  </div>
</template>
