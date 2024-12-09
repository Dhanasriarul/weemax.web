<template>
  <div>
    <!-- key: sec-h-1 -->
    <section
      class="flex flex-col min-h-screen gap-10 px-5 py-10 my-5 bg-black md:flex-row"
    >
      <div class="grid grid-cols-3 gap-5 min-w-[320px] max-w-[400px] md:w-1/2">
        <div class="flex flex-col gap-5">
          <div
            class="h-[250px] w-full bg-white rounded-full transition hover:scale-110"
          ></div>
          <div
            class="h-[150px] w-full bg-white rounded-full transition hover:scale-110"
          ></div>
          <div
            class="h-[250px] w-full bg-white rounded-full transition hover:scale-110"
          ></div>
        </div>
        <div class="flex flex-col gap-5">
          <div
            class="h-[250px] w-full bg-white rounded-full transition hover:scale-110"
          ></div>
          <div
            class="h-[250px] w-full bg-white rounded-full transition hover:scale-110"
          ></div>
        </div>
        <div class="flex flex-col gap-5">
          <div
            class="h-[150px] w-full bg-white rounded-full transition hover:scale-110"
          ></div>
          <div
            class="h-[250px] w-full bg-white rounded-full transition hover:scale-110"
          ></div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-3 md:w-full md:justify-center">
        <h1 class="font-black text-center text-white text-8xl">
          {{ data.title }}
        </h1>
        <p class="text-3xl text-center text-blue-300">
          {{ data.textOne }} <span class="font-black">{{ data.textTwo }}</span>
        </p>
        <a :href="`/r?route=${data.route}`">
          <div
            class="px-10 py-5 text-xl font-bold uppercase bg-white rounded-full w-max"
          >
            {{ data.buttonText }}
          </div>
        </a>
        <!-- <div
          class="h-[300px] w-full bg-white hidden lg:block rounded-[40px] mt-5"
        ></div> -->
      </div>
    </section>
    <!-- key: sec-h-1 -->
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>
