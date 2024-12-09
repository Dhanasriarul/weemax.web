<template>
  <div>
    <div class="grid grid-cols-2 border-gray-200 md:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="relative p-4 border border-gray-200 hover:shadow-xl bg-white group sm:p-6 transition-[0.3s] hover:scale-110 hover:z-[999]"
      >
        <div class="relative w-auto h-fit">
          <div
            class="relative overflow-hidden bg-gray-200 rounded-lg aspect-square group-hover:opacity-75"
          >
            <NuxtLink :to="`/d?productId=${product.productId}`"
              ><img
                :src="product.assetOne"
                alt="TODO"
                class="object-cover object-center w-full h-full"
            /></NuxtLink>
          </div>
          <!-- <div class="absolute z-[9999] bottom-2 left-2">
                    <div
                      class="flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer hover:bg-gray-200"
                    >
                      <i class="fa-regular fa-heart"></i>
                      <i class="fa-solid fa-heart"></i>
                    </div>
                  </div> -->
        </div>

        <div class="pt-10 pb-4 text-center">
          <h3 class="text-sm font-bold text-gray-900">
            <div>
              <!-- <span aria-hidden="true" class="absolute inset-0"></span> -->
              <NuxtLink :to="`/d?productId=${product.productId}`">{{
                product.productTitle
              }}</NuxtLink>
            </div>
          </h3>
          <div class="flex items-center justify-center w-full gap-3 mt-4 h-max">
            <span class="text-base font-bold text-gray-700"
              >₹{{ product.normalPrice }}</span
            >
            <span class="text-xs font-medium text-red-500/50"
              ><del>₹{{ product.mrpPrice }}</del></span
            >
          </div>
          <div
            class="px-2 py-1 mx-auto mt-3 font-bold text-center text-black bg-[#75c3ff] w-max"
          >
            {{ getOff(product.mrpPrice, product.normalPrice) }}% Off
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getOff(mrpPrice, normalPrice) {
      return Math.round(((mrpPrice - normalPrice) / mrpPrice) * 100);
    },
  },
};
</script>
