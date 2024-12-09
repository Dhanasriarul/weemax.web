<template>
  <div>
    <!-- key: product-list-1 -->
    <section class="px-4 py-10">
      <div class="mx-auto md:max-w-none xl:max-w-7xl">
        <div>
          <h1
            class="mb-10 text-3xl w-[70%] font-black md:text-4xl text-black md:w-[50%] lg:text-6xl"
          >
            Best Offers
          </h1>
        </div>
        <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div
            v-for="n in 5"
            :key="n"
            class="relative w-full h-auto overflow-hidden group transition-[0.3] hover:scale-110 bg-white hover:shadow-lg hover:z-[999]"
          >
            <div class="relative w-full h-max">
              <img
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                class="object-cover w-full h-auto"
                alt=""
              />
              <div class="absolute bottom-2 left-2">
                <div
                  class="flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer"
                >
                  <i class="fa-regular fa-heart"></i>
                  <!-- <i class="fa-solid fa-heart"></i> -->
                </div>
              </div>
            </div>

            <div class="p-3">
              <h1 class="text-sm font-bold text-gray-700">Product Name</h1>
              <p
                class="overflow-hidden text-xs text-black/60 text-ellipsis whitespace-nowrap w-[80%]"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, quia repellat! Dignissimos soluta error illum
                perspiciatis. Error deserunt officiis esse.
              </p>
              <div class="flex items-center gap-3">
                <span class="font-bold text-gray-500">Rs. 665</span>
                <span class="text-xs text-red-500/50"><del>Rs: 2000</del></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- key: product-list-1 -->
  </div>
</template>
