<template>
  <div>
    <NavBar />
    <main class="max-w-3xl px-4 py-10 mx-auto sm:px-6 sm:pb-32 lg:px-8">
      <nav class="flex mb-10" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <NuxtLink to="/" class="text-gray-400 hover:text-gray-500">
                <svg
                  class="flex-shrink-0 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Home</span>
              </NuxtLink>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
              <NuxtLink
                to="/account"
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >Account</NuxtLink
              >
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
              <NuxtLink
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current="page"
                >Cart</NuxtLink
              >
            </div>
          </li>
        </ol>
      </nav>
      <div class="flex gap-3">
        <NuxtLink to="/account">
          <div
            class="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </div>
        </NuxtLink>
        <div>
          <h1
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            Cart
          </h1>
          <p class="mt-2 text-sm text-gray-500">
            Your favorite products in one place.
          </p>
          <NuxtLink to="/checkout">
            <button
              class="flex w-full items-center mt-3 justify-center rounded-md border border-transparent bg-black px-2.5 hover:scale-110 transition py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-full sm:flex-grow-0"
            >
              Checkout the cart
            </button>
          </NuxtLink>
        </div>
      </div>

      <div class="mt-12 space-y-16 sm:mt-16">
        <section aria-labelledby="4376-heading">
          <!-- <div
            class="space-y-1 md:flex md:items-baseline md:space-x-4 md:space-y-0"
          >
            <h2
              id="4376-heading"
              class="text-lg font-medium text-gray-900 md:flex-shrink-0"
            >
              Order #4376
            </h2>
            <div
              class="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1"
            >
              <p class="text-sm font-medium text-gray-500">
                Delivered on January 22, 2021
              </p>
              <div class="flex text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-500"
                  >Manage order</a
                >
                <div class="pl-4 ml-4 border-l border-gray-200 sm:ml-6 sm:pl-6">
                  <a href="#" class="text-indigo-600 hover:text-indigo-500"
                    >View Invoice</a
                  >
                </div>
              </div>
            </div>
          </div> -->

          <div
            v-for="(product, index) in products"
            :key="index"
            class="flow-root px-4 mt-6 -mb-6 border border-gray-200 divide-y divide-gray-200 rounded-2xl"
          >
            <div class="py-6 sm:flex">
              <div
                class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8"
              >
                <NuxtLink :to="`/d?productId=${product.productId}`">
                  <img
                    :src="product.assetOne"
                    alt="Brass puzzle in the shape of a jack with overlapping rounded posts."
                    class="flex-none object-cover object-center w-20 h-20 rounded-md sm:h-48 sm:w-48"
                  />
                </NuxtLink>

                <div class="min-w-0 flex-1 pt-1.5 sm:pt-0">
                  <h3 class="text-xl font-bold text-gray-900">
                    <NuxtLink :to="`/d?productId=${product.productId}`">
                      {{ product.productTitle }}
                    </NuxtLink>
                  </h3>
                  <p class="mt-1 font-medium text-gray-900">
                    ₹{{ product.normalPrice * product.quantity }}
                  </p>
                  <p class="mt-1 font-medium text-gray-900">
                    Qty. {{ product.quantity }}
                  </p>
                </div>
              </div>
              <div class="mt-6 space-y-4 sm:ml-6 sm:mt-0 sm:w-40 sm:flex-none">
                <button
                  @click="remove(product.productId, product.inventoryId)"
                  class="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-2.5 hover:scale-110 transition py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                >
                  Remove
                </button>
              </div>
            </div>

            <!-- More products... -->
          </div>
        </section>

        <!-- More orders... -->
      </div>
    </main>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
definePageMeta({
  middleware: ["auth"],
});

export default {
  data() {
    return {
      products: [],
      toast: useToast(),
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.$http
        .$get(`/product/basket/all`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "weemaxAccessToken"
            )}`,
          },
        })
        .then((res) => {
          if (res.success) {
            this.products = res.basketItems;
            return;
          }
          this.toast.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    remove(id, inventoryId) {
      this.$http
        .$delete(`/product/basket?productId=${id}&inventoryId=${inventoryId}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "weemaxAccessToken"
            )}`,
          },
        })
        .then((res) => {
          if (res.success) {
            this.getProducts();
            this.toast.success(res.message);
            return;
          }
          this.toast.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
