<template>
  <div>
    <NavBar />
    <div class="bg-white">
      <div class="py-16 sm:py-24">
        <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div class="max-w-2xl px-4 mx-auto lg:max-w-4xl lg:px-0">
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
                      >Orders</NuxtLink
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
                  Order history
                </h1>
                <p class="mt-2 text-sm text-gray-500">
                  Check the status of recent orders, manage returns, and
                  discover similar products.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16">
          <h2 class="sr-only">Recent orders</h2>
          <div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
            <div
              class="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0"
            >
              <div
                v-for="(order, index) in orders"
                :key="index"
                class="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border"
              >
                <h3 class="sr-only">
                  Order placed on {{ getDate(order.createdAt) }}
                </h3>
                <div class="p-4 sm:p-6">
                  <div aria-label="Progress">
                    <ol
                      role="list"
                      class="space-y-4 md:flex md:space-x-8 md:space-y-0"
                    >
                      <li class="md:flex-1">
                        <!-- Completed Step -->
                        <a
                          href="#"
                          class="flex flex-col py-2 pl-4 border-l-4 border-indigo-600 group hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                        >
                          <span
                            class="text-sm font-medium text-indigo-600 group-hover:text-indigo-800"
                            >Step 1</span
                          >
                          <span class="text-sm font-medium">Order placed</span>
                        </a>
                      </li>
                      <li
                        v-if="
                          order.status == 'dispatched' ||
                          order.status == 'transit' ||
                          order.status == 'delivered'
                        "
                        class="md:flex-1"
                      >
                        <!-- Current Step -->
                        <a
                          href="#"
                          class="flex flex-col py-2 pl-4 border-l-4 border-indigo-600 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                          aria-current="step"
                        >
                          <span class="text-sm font-medium text-indigo-600"
                            >Step 2</span
                          >
                          <span class="text-sm font-medium">Dispatched</span>
                        </a>
                      </li>
                      <li v-else class="md:flex-1">
                        <!-- Upcoming Step -->
                        <a
                          href="#"
                          class="flex flex-col py-2 pl-4 border-l-4 border-gray-200 group hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                        >
                          <span
                            class="text-sm font-medium text-gray-500 group-hover:text-gray-700"
                            >Step 2</span
                          >
                          <span class="text-sm font-medium">Dispatched</span>
                        </a>
                      </li>
                      <li
                        v-if="
                          order.status == 'transit' ||
                          order.status == 'delivered'
                        "
                        class="md:flex-1"
                      >
                        <!-- Current Step -->
                        <a
                          href="#"
                          class="flex flex-col py-2 pl-4 border-l-4 border-indigo-600 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                          aria-current="step"
                        >
                          <span class="text-sm font-medium text-indigo-600"
                            >Step 3</span
                          >
                          <span class="text-sm font-medium">On the way</span>
                        </a>
                      </li>
                      <li v-else class="md:flex-1">
                        <!-- Upcoming Step -->
                        <a
                          href="#"
                          class="flex flex-col py-2 pl-4 border-l-4 border-gray-200 group hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                        >
                          <span
                            class="text-sm font-medium text-gray-500 group-hover:text-gray-700"
                            >Step 3</span
                          >
                          <span class="text-sm font-medium">On the way</span>
                        </a>
                      </li>
                      <li v-if="order.status == 'delivered'" class="md:flex-1">
                        <!-- Current Step -->
                        <a
                          href="#"
                          class="flex flex-col py-2 pl-4 border-l-4 border-indigo-600 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                          aria-current="step"
                        >
                          <span class="text-sm font-medium text-indigo-600"
                            >Step 4</span
                          >
                          <span class="text-sm font-medium">Delivered</span>
                        </a>
                      </li>
                      <li v-else class="md:flex-1">
                        <!-- Upcoming Step -->
                        <a
                          href="#"
                          class="flex flex-col py-2 pl-4 border-l-4 border-gray-200 group hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                        >
                          <span
                            class="text-sm font-medium text-gray-500 group-hover:text-gray-700"
                            >Step 4</span
                          >
                          <span class="text-sm font-medium">Delivered</span>
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>

                <div
                  class="flex items-center px-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:px-6"
                >
                  <dl
                    class="grid flex-1 grid-cols-2 text-sm gap-x-6 sm:col-span-4 sm:grid-cols-6"
                  >
                    <div>
                      <dt class="font-medium text-gray-900">Order number</dt>
                      <dd class="mt-1 text-gray-500">{{ order.orderUUID }}</dd>
                    </div>
                    <div class="">
                      <dt class="font-medium text-gray-900">Date placed</dt>
                      <dd class="mt-1 text-gray-500">
                        <!-- <time datetime="2021-07-06"></time> -->
                        <p>{{ getDate(order.createdAt) }}</p>
                      </dd>
                    </div>
                    <div>
                      <dt class="font-medium text-gray-900">Total amount</dt>
                      <dd class="mt-1 font-medium text-gray-900">
                        ₹{{ order.subTotal }}
                      </dd>
                    </div>
                    <div class="w-full col-span-2">
                      <dt class="font-medium text-gray-900">Address</dt>
                      <dd class="mt-1 text-xs text-gray-900">
                        {{ order.addressName }}
                        {{ order.addressLineOne }}
                        {{ order.addressLineTwo }}
                        {{ order.city }}
                        {{ order.state }}
                        {{ order.zipCode }}
                        {{ order.phone }}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div
                  class="flex justify-end w-full gap-3 px-4 pb-4 border-b border-gray-200 sm:px-6 sm:pb-6"
                >
                  <div class="relative flex flex-col items-end justify-end">
                    <div
                      @click="order.isOptionOpen = !order.isOptionOpen"
                      class="h-[40px] w-[40px] flex items-center justify-center"
                    >
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div
                      v-if="order.isOptionOpen"
                      class="absolute bg-white top-full w-max"
                    >
                      <NuxtLink
                        v-if="isReturnable(order.status, order.updatedAt)"
                        :to="`/account/return-order?orderId=${order.orderId}&orderUUID=${order.orderUUID}`"
                      >
                        <div
                          class="px-6 py-2 mt-2 font-bold text-center text-white transition-all bg-black rounded-lg cursor-pointer hover:scale-110"
                        >
                          Return
                        </div>
                      </NuxtLink>
                      <div
                        v-else
                        class="px-6 py-2 mt-2 font-bold text-center text-white transition-all rounded-lg cursor-not-allowed bg-black/50"
                      >
                        Return
                      </div>
                      <NuxtLink
                        v-if="order.status == 'ordered'"
                        :to="`/account/cancel-order?orderId=${order.orderId}&orderUUID=${order.orderUUID}`"
                      >
                        <div
                          class="px-6 py-2 mt-2 font-bold text-center text-white transition-all bg-red-600 rounded-lg cursor-pointer hover:scale-110"
                        >
                          Cancel Order
                        </div>
                      </NuxtLink>
                      <div
                        v-else
                        class="px-6 py-2 mt-2 font-bold text-center text-white transition-all rounded-lg cursor-not-allowed bg-black/50"
                      >
                        Cancel Order
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Products -->
                <h4 class="sr-only">Items</h4>
                <ul role="list" class="divide-y divide-gray-200">
                  <li
                    v-for="(item, index) in order.items"
                    :key="index"
                    class="p-4 sm:p-6"
                  >
                    <div class="flex items-center sm:items-start">
                      <div
                        class="flex-shrink-0 w-20 h-20 overflow-hidden bg-gray-200 rounded-lg sm:h-40 sm:w-40"
                      >
                        <NuxtLink :to="`/d?productId=${item.productId}`">
                          <img
                            :src="item.assetOne"
                            alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."
                            class="object-cover object-center w-full h-full"
                            :class="
                              item.status == 'cancelled' ||
                              item.status == 'returned'
                                ? 'grayscale'
                                : ''
                            "
                          />
                        </NuxtLink>
                      </div>
                      <div class="flex-1 ml-6 text-sm">
                        <div
                          class="font-medium text-gray-900 sm:flex sm:justify-between"
                        >
                          <h5>
                            <NuxtLink :to="`/d?productId=${item.productId}`">{{
                              item.productTitle
                            }}</NuxtLink>
                          </h5>
                          <p class="mt-2 sm:mt-0">₹{{ item.purchasePrice }}</p>
                        </div>
                        <p class="block mt-2 text-gray-500">
                          Quantity: {{ item.quantity }}
                        </p>
                        <p class="block mt-2 text-gray-500">
                          Size: {{ item.size }}
                        </p>
                        <p class="block mt-2 text-gray-500">
                          Color: {{ item.color }}
                        </p>
                      </div>
                    </div>

                    <div class="mt-6 sm:flex sm:justify-between">
                      <!-- <div class="flex items-center">
                        <svg
                          class="w-5 h-5 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <p class="ml-2 text-sm font-medium text-gray-500">
                          Delivered on
                          <time datetime="2021-07-12">July 12, 2021</time>
                        </p>
                      </div> -->

                      <div
                        class="flex items-center pt-4 mt-6 space-x-4 text-sm font-medium border-t border-gray-200 divide-x divide-gray-200 sm:ml-4 sm:mt-0 sm:border-none sm:pt-0"
                      >
                        <div class="flex justify-center flex-1">
                          <NuxtLink
                            :to="`/d?productId=${item.productId}`"
                            class="text-black whitespace-nowrap"
                            >View product</NuxtLink
                          >
                        </div>
                      </div>
                    </div>
                  </li>

                  <!-- More products... -->
                </ul>
              </div>

              <!-- More orders... -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="returnIsOpen"
      class="fixed top-0 left-0 w-screen h-screen bg-black/40 z-[9999999]"
    >
      <div
        class="h-[80%] px-5 py-3 w-[90%] max-w-[600px] bg-white absolute rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div class="h-[60px] flex items-center justify-between">
          <h1 class="text-3xl font-bold">Add address</h1>
          <div
            @click="
              addAddressIsOpen = false;
              addAddressData = {};
            "
            class="flex items-center justify-center w-10 h-10 transition bg-gray-300 rounded-full cursor-pointer hover:scale-110"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="pb-12 h-[calc(100%-60px)] hide-scrollbar overflow-y-auto">
          <div
            @click="addAddress()"
            class="px-6 py-2 mt-2 font-bold text-center text-white transition-all bg-black rounded-lg cursor-pointer hover:scale-110"
          >
            Add Address
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import dayjs from "dayjs";
definePageMeta({
  middleware: ["auth"],
});
export default {
  data() {
    return {
      orders: [],
      toast: useToast(),
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders() {
      this.$http
        .$get("/product/orders/all", {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "weemaxAccessToken"
            )}`,
          },
        })
        .then((res) => {
          if (res.success) {
            this.orders = res.orders;
            return;
          }
          this.toast.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDate(date) {
      return dayjs(date).format("MMMM DD, YYYY");
    },
    isReturnable(status, date) {
      let deliveredDate = dayjs(date).format("YYYY-MM-DD");
      let modifiedDate = dayjs(deliveredDate)
        .add(4, "day")
        .format("YYYY-MM-DD");
      let currentDate = dayjs().format("YYYY-MM-DD");

      if (status == "delivered" && currentDate <= modifiedDate) {
        return true;
      }
      return false;
    },
  },
};
</script>
