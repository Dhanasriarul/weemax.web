<template>
  <div>
    <NavBar />
    <h1 class="text-5xl font-bold text-center my-14">One Stop Solution</h1>
    <div class="max-w-5xl px-4 mx-auto">
      <!-- <NuxtLink to="/account/biz">
        <img
          src="https://t3.ftcdn.net/jpg/03/53/03/44/360_F_353034415_8zGeAsAX2xk8KhyVJG6N1hfhULBzigeg.jpg"
          class="w-full h-auto mb-10"
        />
      </NuxtLink> -->
      <div
        class="overflow-hidden bg-gray-200 border divide-y divide-gray-200 rounded-lg shadow-xl sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
      >
        <NuxtLink to="/account/profile">
          <div
            class="relative p-6 bg-white rounded-tl-lg rounded-tr-lg sm:rounded-tr-none group focus-within:ring-2 focus-within:ring-inset focus-within:ring-black/60"
          >
            <div>
              <span
                class="inline-flex p-4 text-black bg-white border rounded-lg shadow-xl border-black/10 group-hover:bg-black/5"
              >
                <!-- <img src="/acc/profile.png" class="h-14" alt="" /> -->
                <i class="fa-solid fa-user text-[#1aa7ec]"></i>
              </span>
            </div>
            <div class="mt-8">
              <h3 class="text-base font-semibold leading-6 text-gray-900">
                <div class="focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  Profile
                </div>
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                Manage your profile information and settings.
              </p>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/account/wishlist">
          <div
            class="relative p-6 bg-white sm:rounded-tr-lg group focus-within:ring-2 focus-within:ring-inset focus-within:ring-black/60"
          >
            <div>
              <span
                class="inline-flex p-4 text-black bg-white border rounded-lg shadow-xl border-black/10 group-hover:bg-black/5"
              >
                <!-- <img src="/acc/wishlist.png" class="h-14" alt="" /> -->
                <i class="fa-solid fa-heart text-[#1aa7ec]"></i>
              </span>
            </div>
            <div class="mt-8">
              <h3 class="text-base font-semibold leading-6 text-gray-900">
                <div class="focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  Wishlist
                </div>
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                View your Most wanted products.
              </p>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/account/address">
          <div
            class="relative p-6 bg-white group focus-within:ring-2 focus-within:ring-inset focus-within:ring-black/60"
          >
            <div>
              <span
                class="inline-flex p-4 text-black bg-white border rounded-lg shadow-xl border-black/10 group-hover:bg-black/5"
              >
                <!-- <img src="/acc/address.png" class="h-14" alt="" /> -->
                <i class="fa-solid fa-map-location-dot text-[#1aa7ec]"></i>
              </span>
            </div>
            <div class="mt-8">
              <h3 class="text-base font-semibold leading-6 text-gray-900">
                <div class="focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  My Addresses
                </div>
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                Manage yout shipping address.
              </p>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/account/orders">
          <div
            class="relative p-6 bg-white group focus-within:ring-2 focus-within:ring-inset focus-within:ring-black/60"
          >
            <div>
              <span
                class="inline-flex p-4 text-black bg-white border rounded-lg shadow-xl border-black/10 group-hover:bg-black/5"
              >
                <!-- <img src="/acc/orders.png" class="h-14" alt="" /> -->
                <i class="fa-solid fa-truck-fast text-[#1aa7ec]"></i>
              </span>
            </div>
            <div class="mt-8">
              <h3 class="text-base font-semibold leading-6 text-gray-900">
                <div class="focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  Orders
                </div>
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                View and track your orders.
              </p>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/account/help">
          <div
            class="relative p-6 bg-white sm:rounded-bl-lg group focus-within:ring-2 focus-within:ring-inset focus-within:ring-black/60"
          >
            <div>
              <span
                class="inline-flex p-4 text-black bg-white border rounded-lg shadow-xl border-black/10 group-hover:bg-black/5"
              >
                <!-- <img src="/acc/help.png" class="h-14" alt="" /> -->
                <i class="fa-solid fa-headset text-[#1aa7ec]"></i>
              </span>
            </div>
            <div class="mt-8">
              <h3 class="text-base font-semibold leading-6 text-gray-900">
                <div class="focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  Help Center
                </div>
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                Get all of your questions answered.
              </p>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/account/bag">
          <div
            class="relative p-6 bg-white rounded-bl-lg rounded-br-lg sm:rounded-bl-none group focus-within:ring-2 focus-within:ring-inset focus-within:ring-black/60"
          >
            <div>
              <span
                class="inline-flex p-4 text-black bg-white border rounded-lg shadow-xl border-black/10 group-hover:bg-black/5"
              >
                <!-- <img src="/acc/cart.png" class="h-14" alt="" /> -->
                <i class="fa-solid fa-bag-shopping text-[#1aa7ec]"></i>
              </span>
            </div>
            <div class="mt-8">
              <h3 class="text-base font-semibold leading-6 text-gray-900">
                <div class="focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  Cart
                </div>
              </h3>
              <p class="mt-2 text-sm text-gray-500">View your Cart.</p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <button
        @click="logout()"
        class="flex max-w-max mx-auto mt-5 items-center justify-center rounded-md border border-transparent bg-black px-2.5 hover:scale-110 transition py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-full sm:flex-grow-0"
      >
        Logout
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      window.localStorage.removeItem("weemaxAccessToken");
      window.localStorage.removeItem("weemaxRefreshToken");
      window.localStorage.removeItem("weemaxAccessTokenExp");
      window.localStorage.removeItem("weemaxRefreshTokenExp");

      window.location.href = "/";
    },
  },
};
</script>
