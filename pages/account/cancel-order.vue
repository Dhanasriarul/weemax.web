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
              <NuxtLink to="/account/orders">
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
                  v-if="isLoaded && order.items.length > 0"
                  class="flex justify-end w-full gap-3 px-4 pb-4 border-b border-gray-200 sm:px-6 sm:pb-6"
                >
                  <div
                    v-if="order.status == 'ordered' && selectedItems.length > 0"
                    @click="
                      mode = 'selected';
                      reasonIsOpen = true;
                    "
                    class="px-6 py-2 mt-2 font-bold text-center text-red-600 transition-all bg-white border border-red-600 rounded-lg cursor-pointer hover:scale-110"
                  >
                    Cancel Selected - {{ selectedItems.length }}
                  </div>
                  <div
                    v-if="order.status == 'ordered'"
                    @click="
                      mode = 'all';
                      reasonIsOpen = true;
                    "
                    class="px-6 py-2 mt-2 font-bold text-center text-white transition-all bg-red-600 border border-red-600 rounded-lg cursor-pointer hover:scale-110"
                  >
                    Cancel All
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
                        class="relative flex-shrink-0 w-20 h-20 overflow-hidden bg-gray-200 rounded-lg sm:h-40 sm:w-40"
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
                          <!-- <div
                            class="absolute top-0 left-0 w-full h-full"
                          ></div> -->
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

                      <div>
                        <div
                          v-if="item.status == 'ordered'"
                          class="flex items-center mb-4"
                        >
                          <button
                            @click="
                              item.isChecked = !item.isChecked;
                              checkItem();
                            "
                            class="px-6 py-2 mt-2 font-bold text-center transition-all rounded-lg cursor-pointer"
                            :class="
                              item.isChecked
                                ? 'text-white bg-red-600 border border-red-600'
                                : 'text-red-600 bg-white border border-red-600'
                            "
                          >
                            <p v-if="item.isChecked">Unselect item</p>
                            <p v-else>Select item</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <!-- More products... -->
                </ul>

                <div v-if="isLoaded">
                  <div v-if="order.canceledItems.length > 0">
                    <h1 class="px-4 mt-5 text-xl font-bold sm:px-6">
                      Canceled Items
                    </h1>
                    <ul role="list" class="divide-y divide-gray-200">
                      <li
                        v-for="(item, index) in order.canceledItems"
                        :key="index"
                        class="p-4 sm:p-6"
                      >
                        <div class="flex items-center sm:items-start">
                          <div
                            class="relative flex-shrink-0 w-20 h-20 overflow-hidden bg-gray-200 rounded-lg sm:h-40 sm:w-40"
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
                              <!-- <div
                            class="absolute top-0 left-0 w-full h-full"
                          ></div> -->
                            </NuxtLink>
                          </div>
                          <div class="flex-1 ml-6 text-sm">
                            <div
                              class="font-medium text-gray-900 sm:flex sm:justify-between"
                            >
                              <h5>
                                <NuxtLink
                                  :to="`/d?productId=${item.productId}`"
                                  >{{ item.productTitle }}</NuxtLink
                                >
                              </h5>
                              <p class="mt-2 sm:mt-0">
                                ₹{{ item.purchasePrice }}
                              </p>
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

                          <div>
                            <div
                              v-if="item.status == 'ordered'"
                              class="flex items-center mb-4"
                            >
                              <button
                                @click="
                                  item.isChecked = !item.isChecked;
                                  checkItem();
                                "
                                class="px-6 py-2 mt-2 font-bold text-center transition-all rounded-lg cursor-pointer"
                                :class="
                                  item.isChecked
                                    ? 'text-white bg-blue-600 border border-blue-600'
                                    : 'text-blue-600 bg-white border border-blue-600'
                                "
                              >
                                <p v-if="item.isChecked">Unselect item</p>
                                <p v-else>Select item</p>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>

                      <!-- More products... -->
                    </ul>
                  </div>
                </div>
              </div>

              <!-- More orders... -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="reasonIsOpen"
      class="fixed top-0 left-0 w-screen h-screen bg-black/40 z-[9999999]"
    >
      <div
        class="h-max max-h-[80%] hide-scrollbar overflow-auto px-5 py-3 w-[90%] max-w-[600px] bg-white absolute rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div class="h-[60px] flex items-center justify-between">
          <h1 class="text-3xl font-bold">Add reason</h1>
          <div
            @click="
              reasonIsOpen = false;
              reason = '';
            "
            class="flex items-center justify-center w-10 h-10 transition bg-gray-300 rounded-full cursor-pointer hover:scale-110"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="pb-5 h-[calc(100%-60px)]">
          <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <div class="mt-2">
                <textarea
                  v-model="reason"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  placeholder="Enter reason"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <h1 class="mt-2 font-bold">Choose refund option:</h1>
          <div
            class="grid w-full h-auto grid-cols-2 gap-4 p-2 mt-3 border rounded-full border-black/50"
          >
            <div
              @click="selectedPayout = 'wallet'"
              class="px-2 py-1 text-center rounded-full"
              :class="{
                'bg-black text-white font-bold': selectedPayout == 'wallet',
              }"
            >
              Purchase Wallet
            </div>
            <!-- font-bold bg-white/10 -->
            <div
              @click="selectedPayout = 'bank'"
              class="px-2 py-1 text-center rounded-full"
              :class="{
                'bg-black text-white font-bold': selectedPayout == 'bank',
              }"
            >
              Bank
            </div>
          </div>
          <div v-if="selectedPayout == 'bank'" class="mt-5">
            <div class="sm:col-span-6">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Account holder name</label
              >
              <div class="mt-2">
                <input
                  v-model="bankDetails.accountHolderName"
                  type="text"
                  id="first-name"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-6">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Bank name</label
              >
              <div class="mt-2">
                <input
                  v-model="bankDetails.bankName"
                  type="text"
                  id="first-name"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-6">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Account Number</label
              >
              <div class="mt-2">
                <input
                  v-model="bankDetails.accountNumber"
                  type="number"
                  id="first-name"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-6">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >IFSC Code</label
              >
              <div class="mt-2">
                <input
                  v-model="bankDetails.ifscCode"
                  type="text"
                  id="first-name"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <p v-if="selectedPayout == 'wallet'" class="my-2 text-xs font-bold">
            Note: You will get your refund when the products reach us.
          </p>
          <p v-if="selectedPayout == 'bank'" class="my-2 text-xs font-bold">
            Note: You will get your refund in 5 to 7 business days.
          </p>
          <div
            @click="cancelOrder()"
            class="px-6 py-2 mt-2 font-bold text-center text-white transition-all bg-red-600 rounded-lg cursor-pointer hover:scale-110"
          >
            Cancel Order
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
      order: {},
      toast: useToast(),
      orderId: this.$route.query.orderId,
      orderUUID: this.$route.query.orderUUID,
      checked: [],
      selectedItems: [],
      reasonIsOpen: false,
      reason: "",
      isLoaded: false,
      mode: "",
      selectedPayout: "wallet",
      bankDetails: {
        accountHolderName: "",
        bankName: "",
        accountNumber: "",
        ifscCode: "",
      },
    };
  },
  mounted() {
    if (!this.$route.query.orderId || !this.$route.query.orderUUID) {
      window.location.href = "/account/orders";
    }
    this.getOrder();
  },
  methods: {
    getOrder() {
      this.$http
        .$get(`/product/orders/details/${this.orderId}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "weemaxAccessToken"
            )}`,
          },
        })
        .then((res) => {
          if (res.success) {
            this.order = res.order;
            this.isLoaded = true;
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
    checkItem() {
      this.selectedItems = this.order.items
        .filter((item) => item.isChecked === true && item.status === "ordered")
        .map((item) => item.orderItemId);
    },
    cancelOrder() {
      if (this.reason === "") {
        this.toast.error("Please enter reason");
        return;
      }
      if (this.selectedItems.length === 0 && this.mode === "selected") {
        this.toast.error("Please select items");
        return;
      }
      if (this.mode === "all") {
        this.$http
          .$put(
            `/product/orders/cancel?orderId=${this.orderId}&orderUUID=${this.orderUUID}`,
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                  "weemaxAccessToken"
                )}`,
              },
              body: {
                orderItemId: this.order.items
                  .filter((item) => item.status == "ordered")
                  .map((item) => item.orderItemId),
                reason: this.reason,
                refundMethod: this.selectedPayout,
                refundData: this.bankDetails,
              },
            }
          )
          .then((res) => {
            if (res.success) {
              this.toast.success(res.message);
              this.getOrder();
              this.reasonIsOpen = false;
              this.reason = "";
              this.selectedItems = [];
              return;
            }
            this.toast.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$http
          .$put(
            `/product/orders/cancel?orderId=${this.orderId}&orderUUID=${this.orderUUID}`,
            {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                  "weemaxAccessToken"
                )}`,
              },
              body: {
                orderItemId: this.selectedItems,
                reason: this.reason,
                refundMethod: this.selectedPayout,
                refundData: this.bankDetails,
              },
            }
          )
          .then((res) => {
            if (res.success) {
              this.toast.success(res.message);
              this.getOrder();
              this.reasonIsOpen = false;
              this.reason = "";
              this.selectedItems = [];
              return;
            }
            this.toast.error(res.message);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
