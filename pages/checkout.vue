<template>
  <div>
    <NavBar />
    <nav aria-label="Progress">
      <ol
        role="list"
        class="border border-gray-300 divide-y divide-gray-300 rounded-md md:flex md:divide-y-0"
      >
        <li class="relative md:flex md:flex-1">
          <!-- Completed Step -->
          <div class="flex items-center w-full group" @click="navigateTo(1)">
            <span class="flex items-center px-6 py-4 text-sm font-medium">
              <span
                v-if="progress.step1"
                class="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-black rounded-full"
              >
                <svg
                  class="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span
                v-else
                class="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-black rounded-full"
              >
                <span class="font-black text-bold">01</span>
              </span>
              <span
                class="ml-4 text-sm"
                :class="stepIndex == 1 ? 'font-black' : 'font-medium'"
                >Address</span
              >
            </span>
          </div>
          <!-- Arrow separator for lg screens and up -->
          <div
            class="absolute top-0 right-0 hidden w-5 h-full md:block"
            aria-hidden="true"
          >
            <svg
              class="w-full h-full text-gray-300"
              viewBox="0 0 22 80"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 -2L20 40L0 82"
                vector-effect="non-scaling-stroke"
                stroke="currentcolor"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </li>
        <li class="relative md:flex md:flex-1" @click="navigateTo(2)">
          <!-- Current Step -->
          <div
            class="flex items-center px-6 py-4 text-sm font-medium"
            aria-current="step"
          >
            <span
              v-if="progress.step2"
              class="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-black rounded-full"
            >
              <svg
                class="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span
              v-else
              class="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-black rounded-full"
            >
              <span class="font-black text-bold">02</span>
            </span>
            <span
              class="ml-4 text-sm"
              :class="stepIndex == 2 ? 'font-black' : 'font-medium'"
              >Order Summary</span
            >
          </div>
          <!-- Arrow separator for lg screens and up -->
          <div
            class="absolute top-0 right-0 hidden w-5 h-full md:block"
            aria-hidden="true"
          >
            <svg
              class="w-full h-full text-gray-300"
              viewBox="0 0 22 80"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 -2L20 40L0 82"
                vector-effect="non-scaling-stroke"
                stroke="currentcolor"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </li>
        <li class="relative md:flex md:flex-1">
          <!-- Upcoming Step -->
          <a href="#" class="flex items-center group">
            <span class="flex items-center px-6 py-4 text-sm font-medium">
              <span
                v-if="progress.step3"
                class="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-black rounded-full"
              >
                <svg
                  class="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span
                v-else
                class="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-black rounded-full"
              >
                <span class="font-black text-bold">03</span>
              </span>
              <span
                class="ml-4 text-sm"
                :class="stepIndex == 3 ? 'font-black' : 'font-medium'"
                >Order Status</span
              >
            </span>
          </a>
        </li>
      </ol>
    </nav>

    <div v-if="stepIndex == 1" class="py-24 bg-white sm:py-32">
      <div class="px-6 mx-auto max-w-7xl lg:px-8">
        <div
          class="max-w-2xl mx-auto space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none"
        >
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                Where to Deliver?
              </h2>
              <p class="mt-4 leading-7 text-gray-600">
                Pick your delivery address.
              </p>
              <div
                @click="addAddressIsOpen = true"
                class="px-6 py-2 mt-2 font-bold text-center text-white transition-all bg-black rounded-lg cursor-pointer hover:scale-110"
              >
                Add Address
              </div>
            </div>
            <div
              class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
            >
              <div
                v-for="(address, index) in addresses"
                :key="index"
                class="p-10 rounded-2xl bg-gray-50"
                :class="
                  addressId == address.addressId ? 'border-2 border-black' : ''
                "
              >
                <h3 class="text-base font-semibold leading-7 text-gray-900">
                  {{ address.name }}
                </h3>
                <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div class="mt-1">
                    <dt class="sr-only">Phone number</dt>
                    <dd>{{ address.phone }}</dd>
                  </div>
                  <div class="mt-1">
                    <dt class="sr-only">Address</dt>
                    <dd>{{ address.addressLineOne }}</dd>
                    <dd>{{ address.addressLineTwo }}</dd>
                    <dd>{{ address.city }}</dd>
                    <dd>{{ address.state }}</dd>
                    <dd>{{ address.zipCode }}</dd>
                  </div>
                </dl>
                <button
                  @click="chooseAddress(index)"
                  class="flex mt-3 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm hover:scale-110 transition font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                >
                  Choose
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Shopping Cart Section Begin -->
    <div v-if="stepIndex == 2" class="bg-white">
      <div
        class="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Basket
        </h1>
        <div
          class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
        >
          <section aria-labelledby="cart-heading" class="lg:col-span-7">
            <h2 id="cart-heading" class="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              v-if="products.length > 0"
              role="list"
              class="border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              <li
                v-for="(product, index) in products"
                :key="index"
                class="flex py-6 sm:py-10"
              >
                <div class="flex-shrink-0">
                  <img
                    :src="product.assetOne"
                    alt="Front of men&#039;s Basic Tee in sienna."
                    class="object-cover object-center w-24 h-24 rounded-md sm:h-48 sm:w-48"
                  />
                </div>

                <div class="flex flex-col justify-between flex-1 ml-4 sm:ml-6">
                  <div
                    class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0"
                  >
                    <div>
                      <div class="flex justify-between">
                        <h3 class="text-sm">
                          <div
                            class="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {{ product.productTitle }}
                          </div>
                        </h3>
                      </div>
                      <div class="flex mt-1 text-sm">
                        <p class="text-gray-500 uppercase">
                          {{ product.color }}
                        </p>
                        <p
                          class="pl-4 ml-4 text-gray-500 border-l border-gray-200"
                        >
                          {{ product.size }}
                        </p>
                      </div>
                      <p class="mt-1 text-sm font-medium text-gray-900">
                        ₹{{ product.normalPrice * product.quantity }}
                      </p>
                    </div>

                    <div class="mt-4 sm:mt-0 sm:pr-9">
                      <div class="flex items-center">
                        <div
                          @click="changeQty(index, 'minus')"
                          class="flex items-center justify-center w-5 h-5 text-white rounded-full bg-black/80"
                        >
                          <i class="text-xs scale-75 fa-solid fa-minus"></i>
                        </div>
                        <div
                          class="flex items-center justify-center px-3 text-xl font-bold"
                        >
                          {{ product.quantity }}
                        </div>
                        <div
                          @click="changeQty(index, 'add')"
                          class="flex items-center justify-center w-5 h-5 text-white rounded-full bg-black/80"
                        >
                          <i class="text-xs scale-75 fa-solid fa-plus"></i>
                        </div>
                      </div>

                      <div class="absolute top-0 right-0">
                        <i
                          @click="removeBasketItem(index)"
                          class="text-red-400 cursor-pointer fa-solid fa-trash-can"
                        ></i>
                      </div>
                    </div>
                  </div>

                  <p
                    v-if="product.isAvailable"
                    class="flex items-center mt-4 space-x-2 text-sm text-gray-700"
                  >
                    <i class="text-green-500 fa-solid fa-circle-check"></i>
                    <span>In stock</span>
                  </p>
                  <p
                    v-else
                    class="flex items-center mt-4 space-x-2 text-sm text-gray-700"
                  >
                    <i class="text-red-500 fa-solid fa-circle-xmark"></i>
                    <span>Not In stock</span>
                  </p>
                </div>
              </li>
            </ul>

            <div v-else class="col-lg-8">
              <button
                type="button"
                class="relative block w-full p-12 text-center border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <i
                  class="text-gray-300 fa-solid fa-basket-shopping text-7xl"
                ></i>
                <span class="block mt-2 text-sm font-semibold text-gray-900"
                  >No product in the basket</span
                >
                <NuxtLink to="/">
                  <button
                    class="w-full px-4 py-3 mt-4 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Continue Shopping
                  </button>
                </NuxtLink>
              </button>
            </div>
          </section>

          <!-- Order summary -->
          <section
            aria-labelledby="summary-heading"
            class="px-4 py-6 mt-16 rounded-lg lg:sticky lg:top-5 bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <dl class="mt-6 space-y-4">
              <div class="flex items-center justify-between">
                <dt class="text-sm text-gray-600">Subtotal</dt>
                <dd class="text-sm font-medium text-gray-900">
                  ₹{{ sumProducts }}
                </dd>
              </div>
              <div
                class="flex items-center justify-between pt-4 border-t border-gray-200"
              >
                <dt class="flex items-center text-sm text-gray-600">
                  <span>Shipping</span>
                </dt>
                <dd class="text-sm font-medium text-gray-900">
                  ₹{{ shipping }}
                </dd>
              </div>
              <div
                class="flex items-center justify-between pt-4 border-t border-gray-200"
              >
                <dt class="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                </dt>
                <dd class="text-sm font-medium text-gray-900">
                  <p v-for="(tax, key) in taxes" :key="key" class="capitalize">
                    {{ key }}: <span>₹{{ tax }}</span>
                  </p>
                </dd>
              </div>
              <div
                class="flex items-center justify-between pt-4 border-t border-gray-200"
              >
                <dt class="text-base font-medium text-gray-900">Order total</dt>
                <dd class="text-base font-medium text-gray-900">
                  ₹{{ subTotal }}
                </dd>
              </div>
              <div
                v-if="cashbackReduction > 0"
                class="flex items-center justify-between pt-4 border-t border-gray-200"
              >
                <dt class="text-base font-medium text-gray-900">
                  Cashback Reduction
                  <i
                    v-if="cashbackReductionEnabled == false"
                    @click="cashbackRed('edit')"
                    class="mx-2 fa-solid fa-pen-to-square"
                  ></i>
                  <i
                    v-if="cashbackReductionEnabled == false"
                    @click="cashbackRed('clear')"
                    class="fa-solid fa-ban"
                  ></i>
                </dt>
                <dd
                  v-if="cashbackReductionEnabled"
                  class="text-base font-medium text-gray-900"
                >
                  <input
                    v-model="customCashback"
                    type="number"
                    id="cashbackReductionInput"
                    class="text-right bg-transparent border-none outline-none w-max"
                    placeholder="Enter the amount"
                  />

                  <i
                    v-if="cashbackReductionEnabled"
                    @click="cashbackRed('submitEdit')"
                    class="ml-2 fa-solid fa-check"
                  ></i>
                </dd>
                <dd v-else class="text-base font-medium text-gray-900">
                  - ₹{{ cashbackReduction }}
                </dd>
              </div>
              <div
                v-if="cashbackReduction > 0"
                class="flex items-center justify-between pt-4 border-t border-gray-200"
              >
                <dt class="text-base font-medium text-gray-900">Order total</dt>
                <dd class="text-base font-medium text-gray-900">
                  ₹{{ subTotal - cashbackReduction }}
                </dd>
              </div>
              <div class="w-full p-5 rounded-xl bg-black/10">
                <h1 class="font-bold">Buy Using Your Cashback Rewards</h1>
                <div class="flex items-center justify-between">
                  <div class="font-medium">Your Reward Balance:</div>
                  <div class="text-2xl font-medium">
                    ₹{{ user.totalBalance }}
                  </div>
                </div>

                <NuxtLink to="/" v-if="products.length <= 0">
                  <div
                    class="px-3 mx-auto mt-4 font-bold text-white bg-black rounded-full w-max"
                  >
                    Continue Shopping
                  </div>
                </NuxtLink>
                <div
                  v-else-if="
                    cashbackReduction == 0 || cashbackReduction == null
                  "
                  @click="cashbackRed('all')"
                  class="px-3 mx-auto mt-4 font-bold text-white bg-black rounded-full w-max"
                >
                  Click to Claim
                </div>
              </div>
            </dl>

            <div
              v-if="
                products.length > 0 &&
                sumProducts > 0 &&
                cashbackReductionEnabled == false
              "
              class="mt-6"
            >
              <!-- <button
                v-if="products.length > 0 && sumProducts > 0"
                @click="placeOrder()"
                class="w-full px-4 py-3 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button> -->

              <button
                v-if="cashbackReduction >= subTotal"
                @click="placeOrder()"
                class="w-full px-4 py-3 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>

              <form
                v-else
                method="POST"
                name="customerData"
                action="https://api.weemax.in/platform/api/payment/ccavRequestHandler"
              >
                <div class="h-[1px] w-[1px] overflow-hidden">
                  <input
                    v-if="cashbackReduction > 0"
                    type="text"
                    name="amount"
                    :value="subTotal - cashbackReduction"
                  />
                  <input v-else type="text" name="amount" :value="subTotal" />
                  <input
                    type="text"
                    name="merchant_id"
                    id="merchant_id"
                    value="2479727"
                  />
                  <input type="text" name="order_id" :value="orderId" />
                  <input type="text" name="currency" value="INR" />
                  <input
                    type="text"
                    name="redirect_url"
                    value="https://api.weemax.in/platform/api/payment/ccavResponseHandler"
                  />
                  <input
                    type="text"
                    name="cancel_url"
                    value="https://www.weemax.in/checkout"
                  />
                  <input type="text" name="language" id="language" value="EN" />

                  <input
                    type="text"
                    name="billing_name"
                    :value="choosedAddress.name"
                  />
                  <input
                    type="text"
                    name="billing_address"
                    :value="`${choosedAddress.addressLineOne}, ${choosedAddress.addressLineTwo}`"
                  />
                  <input
                    type="text"
                    name="billing_city"
                    :value="choosedAddress.city"
                  />
                  <input
                    type="text"
                    name="billing_state"
                    :value="choosedAddress.state"
                  />
                  <input
                    type="text"
                    name="billing_zip"
                    :value="choosedAddress.zipCode"
                  />
                  <input type="text" name="billing_country" value="India" />
                  <input
                    type="text"
                    name="billing_tel"
                    :value="choosedAddress.phone"
                  />
                  <input
                    type="text"
                    name="billing_email"
                    :value="user.userEmail"
                  />

                  <input
                    type="text"
                    name="delivery_name"
                    :value="choosedAddress.name"
                  />
                  <input
                    type="text"
                    name="delivery_address"
                    :value="`${choosedAddress.addressLineOne}, ${choosedAddress.addressLineTwo}`"
                  />
                  <input
                    type="text"
                    name="delivery_city"
                    :value="choosedAddress.city"
                  />
                  <input
                    type="text"
                    name="delivery_state"
                    :value="choosedAddress.state"
                  />
                  <input
                    type="text"
                    name="delivery_zip"
                    :value="choosedAddress.zipCode"
                  />
                  <input type="text" name="delivery_country" value="India" />
                  <input
                    type="text"
                    name="delivery_tel"
                    :value="choosedAddress.phone"
                  />
                  <input type="text" name="merchant_param1" :value="isTn" />
                  <input
                    type="text"
                    name="merchant_param2"
                    :value="addressId"
                  />
                  <input
                    type="text"
                    name="merchant_param3"
                    :value="user.userId"
                  />
                  <input
                    type="text"
                    name="merchant_param4"
                    :value="cashbackReduction"
                  />
                  <input
                    type="text"
                    name="merchant_param5"
                    :value="careerCode"
                  />
                </div>

                <input
                  type="submit"
                  class="w-full px-4 py-3 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50"
                  value="Checkout"
                />
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div v-if="stepIndex == 3">
      <div
        v-if="$route.query.status == 'success'"
        class="min-h-[300px] w-[90%] my-5 max-w-[500px] border-2 rounded-3xl mx-auto border-black flex justify-center items-center flex-col gap-4 p-4"
      >
        <i class="text-gray-400 text-7xl fa-solid fa-truck-fast"></i>
        <span class="text-xl font-bold">Order Placed!</span>
        <NuxtLink :to="`/account/orders`">
          <div
            class="w-full px-4 py-3 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Track order
          </div>
        </NuxtLink>
        <p># Order Id: {{ $route.query.orderId }}</p>
      </div>
      <div
        v-else
        class="min-h-[300px] w-[90%] my-5 max-w-[500px] border-2 rounded-3xl mx-auto border-black flex justify-center items-center flex-col gap-4 p-4"
      >
        <i class="text-red-400 fa-solid text-7xl fa-circle-exclamation"></i>
        <span class="text-xl font-bold">Oops!... Order Failed</span>
        <NuxtLink :to="`/account/help`">
          <div
            class="w-full px-4 py-3 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Contact Support
          </div>
        </NuxtLink>
        <div
          v-if="$route.query.message"
          class="w-full px-3 py-3 font-bold text-center text-white bg-black"
        >
          {{ $route.query.message }}
        </div>
      </div>
    </div>
    <!-- Shopping Cart Section End -->

    <div
      v-if="cashbackModalIsOpen"
      class="fixed top-0 left-0 w-full h-full bg-black/70 z-[9999] flex justify-center items-center"
    >
      <div
        class="h-[80%] w-[90%] flex flex-col justify-center items-center bg-white rounded-xl border-4 relative border-dashed border-yellow-500"
      >
        <div
          @click="cashbackModalIsOpen = false"
          class="absolute flex items-center justify-center w-10 h-10 bg-black rounded-full right-3 top-3"
        >
          <i class="text-white fa-solid fa-xmark"></i>
        </div>
        <img src="/cashback.gif" class="w-[70%] max-w-[300px] mx-auto" alt="" />
        <div class="mt-3 text-center">
          <h1 class="text-2xl font-bold">Cashback</h1>
          <p class="px-10 text-sm text-black/60">
            You won a cashback in this purchase. You can buy products with this.
          </p>
          <div
            class="relative px-4 py-2 mx-auto mt-5 overflow-hidden border-4 border-dashed w-max rounded-xl"
          >
            <h1 class="text-4xl font-bold">
              ₹{{ $route.query.totalCashback }}
            </h1>
            <p>You Won</p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="addAddressIsOpen"
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
          <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="addAddressData.name"
                  id="first-name"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                for="mobile"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Mobile</label
              >
              <div class="mt-2">
                <input
                  id="mobile"
                  v-model="addAddressData.phone"
                  type="email"
                  class="block w-full rounded-md px-3 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Address Line One</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="addAddressData.addressLineOne"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Address Line Two (Optional)</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="addAddressData.addressLineTwo"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <label
                for="city"
                class="block text-sm font-medium leading-6 text-gray-900"
                >City</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="addAddressData.city"
                  class="block w-full rounded-md px-3 border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="region"
                class="block text-sm font-medium leading-6 text-gray-900"
                >State / Province</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="addAddressData.state"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="postal-code"
                class="block text-sm font-medium leading-6 text-gray-900"
                >ZIP / Postal code</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="addAddressData.zipCode"
                  class="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div
            @click="addAddress()"
            class="px-6 py-2 mt-2 font-bold text-center text-white transition-all bg-black rounded-lg cursor-pointer hover:scale-110"
          >
            Add Address
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <Loader v-if="isLoading" />
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import { v4 as uuidv4 } from "uuid";
definePageMeta({
  middleware: ["auth"],
});
export default {
  data() {
    return {
      toast: useToast(),
      uuid: uuidv4(),
      isLoading: true,
      isLoggedIn: false,
      addressId: null,
      isTn: null,
      products: [],
      address: {},
      choosedAddress: {},
      sumProducts: 0,
      shipping: 0,
      taxes: {},
      subTotal: 0,
      stepIndex: 1,
      addresses: [],
      progress: {
        step1: false,
        step2: false,
        step3: false,
      },
      orderId: "",
      firstOrder: false,
      addAddressData: {},
      addAddressIsOpen: false,
      user: {},
      cashbackModalIsOpen: false,
      cashbackReduction: 0,
      cashbackReductionEnabled: false,
      customCashback: null,
      careerCode: "",
    };
  },
  mounted() {
    if (!this.addressId || !this.isTn) {
      this.stepIndex = 1;
    }

    if (window.localStorage.getItem("weemaxCareerReferCode")) {
      this.careerCode = window.localStorage.getItem("weemaxCareerReferCode");
    }

    this.authCheck();
    this.getAddress();

    // this.getOrderSummary();
    if (this.$route.query.status && this.$route.query.status != "failed") {
      this.cashbackModalIsOpen = true;
      this.progress.step1 = true;
      this.progress.step2 = true;
      this.progress.step3 = true;
      this.stepIndex = 3;
    } else {
      this.orderId = this.uuid;
    }

    if (this.$route.query.status == "failed") {
      this.progress.step1 = true;
      this.progress.step2 = true;
      this.progress.step3 = true;
      this.stepIndex = 3;
    }
  },
  methods: {
    authCheck() {
      const token = window.localStorage.getItem("weemaxAccessToken");
      let expTime = window.localStorage.getItem("weemaxAccessTokenExp");

      expTime = Math.floor(new Date(expTime).getTime() / 1000);
      let currentTime = Math.floor(Date.now() / 1000);

      if (token) {
        if (expTime > currentTime) {
          this.isLoggedIn = true;
          this.getUser();
          return;
        }
        // window.location.href = "/login";
      }
    },
    getUser() {
      this.$http
        .$get(`/user/profile`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          if (res.success) {
            this.user = res.user;
            return;
          }
          console.log(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openEditModal(index) {
      this.editAddressIsOpen = true;
      this.editAddressData = this.addresses[index];
    },
    async addAddress() {
      if (this.addAddressData.name == "") {
        return this.toast.error("Name is required");
      }
      if (this.addAddressData.phone == "") {
        return this.toast.error("Phone is required");
      }
      if (this.addAddressData.addressLineOne == "") {
        return this.toast.error("Address Line One is required");
      }
      if (this.addAddressData.city == "") {
        return this.toast.error("City is required");
      }
      if (this.addAddressData.state == "") {
        return this.toast.error("State is required");
      }
      if (this.addAddressData.zipCode == "") {
        return this.toast.error("Zip Code is required");
      }

      this.isLoading = true;

      let addObj = {
        name: this.addAddressData.name,
        phone: this.addAddressData.phone,
        addressLineOne: this.addAddressData.addressLineOne,
        addressLineTwo: this.addAddressData.addressLineTwo,
        city: this.addAddressData.city,
        state: this.addAddressData.state,
        zipCode: this.addAddressData.zipCode,
      };

      await this.$http
        .$get(`https://api.postalpincode.in/pincode/${addObj.zipCode}`)
        .then(async (res) => {
          if (res[0].Status == "Success") {
            addObj.isTn = res[0].PostOffice[0].State == "Tamil Nadu" ? 1 : 0;

            await this.$http
              .$post(`/user/profile/addAddress`, {
                headers: {
                  Authorization:
                    "Bearer " +
                    window.localStorage.getItem("weemaxAccessToken"),
                },
                body: addObj,
              })
              .then((res) => {
                if (res.success) {
                  this.toast.success("Address added successfully");
                  this.getAddress();
                  this.addAddressIsOpen = false;
                  this.addAddressData = {};
                  this.isLoading = false;
                  return;
                }
                this.isLoading = false;
                this.toast.error(res.message);
              });
          } else {
            this.isLoading = false;
            this.toast.error("Invalid Zip Code");
          }
        });
    },
    getAddress() {
      this.$http
        .$get(`/user/profile/getAllAddresses`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          this.addresses = res.addresses;
          this.isLoading = false;
        });
    },
    getOrderSummary() {
      this.$http
        .$get(
          `/checkout/orderSummary?addressId=${this.addressId}&state=${
            this.isTn == 1 ? "tn" : ""
          }`,
          {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
            },
          }
        )
        .then((res) => {
          if (res.success) {
            this.products = res.products;
            this.sumProducts = res.sumProducts;
            this.shipping = res.shippingCharge;
            this.subTotal = res.subTotal;
            this.taxes = res.taxes;
          }
          this.isLoading = false;
        });
    },
    changeCount(action, index) {
      let product = this.products[index];

      if (action == "add") {
        if (product.productQuantity > product.quantity) {
          this.products[index].quantity++;
          this.$http
            .$put(
              `/product/basket?productId=${product.productId}&quantity=${this.products[index].quantity}`,
              {
                headers: {
                  Authorization:
                    "Bearer " +
                    window.localStorage.getItem("weemaxAccessToken"),
                },
              }
            )
            .then((res) => {
              if (res.success) {
                this.getOrderSummary();
              }
            });
        }
      } else {
        if (product.quantity > 1) {
          this.products[index].quantity--;
          this.$http
            .$put(
              `/product/basket?productId=${product.productId}&quantity=${this.products[index].quantity}`,
              {
                headers: {
                  Authorization:
                    "Bearer " +
                    window.localStorage.getItem("weemaxAccessToken"),
                },
              }
            )
            .then((res) => {
              if (res.success) {
                this.getOrderSummary();
              }
            });
        }
      }
    },
    removeBasketItem(index) {
      let product = this.products[index];
      this.$http
        .$delete(
          `/product/basket?productId=${product.productId}&inventoryId=${product.inventoryId}`,
          {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
            },
          }
        )
        .then((res) => {
          if (res.success) {
            this.getOrderSummary();
          }
        });
    },
    placeOrder() {
      this.$http
        .$post(
          `/checkout/placeOrder?addressId=${this.addressId}&state=${
            this.isTn == 1 ? "tn" : ""
          }&orderUUID=${this.orderId}&cashbackReduction=${
            this.cashbackReduction || 0
          }&careerCode=${this.careerCode}`,
          {
            headers: {
              Authorization:
                "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
            },
          }
        )
        .then((res) => {
          window.location.href = res.message;
        });
    },
    changeQty(index, action) {
      let product = this.products[index];

      if (action == "add") {
        if (product.productQuantity > product.quantity) {
          this.$http
            .$put(
              `/product/basket?productId=${product.productId}&inventoryId=${
                product.inventoryId
              }&quantity=${this.products[index].quantity + 1}`,
              {
                headers: {
                  Authorization: `Bearer ${window.localStorage.getItem(
                    "weemaxAccessToken"
                  )}`,
                },
              }
            )
            .then((res) => {
              if (res.success) {
                // this.basketItems[index].quantity++;
                this.getOrderSummary();
                this.toast.success(res.message);
                return;
              }
              this.toast.error(res.message);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else {
        if (product.quantity > 1) {
          this.$http
            .$put(
              `/product/basket?productId=${product.productId}&inventoryId=${
                product.inventoryId
              }&quantity=${this.products[index].quantity - 1}`,
              {
                headers: {
                  Authorization: `Bearer ${window.localStorage.getItem(
                    "weemaxAccessToken"
                  )}`,
                },
              }
            )
            .then((res) => {
              if (res.success) {
                // this.basketItems[index].quantity++;
                this.getOrderSummary();
                this.toast.success(res.message);
                return;
              }
              this.toast.error(res.message);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    },
    chooseAddress(index) {
      this.isLoading = true;
      this.addressId = this.addresses[index].addressId;
      this.choosedAddress = this.addresses[index];
      this.isTn = this.addresses[index].isTn;

      sessionStorage.removeItem("addressId");
      sessionStorage.removeItem("isTn");

      sessionStorage.setItem("addressId", this.addressId);
      sessionStorage.setItem("isTn", this.isTn);

      this.progress.step1 = true;

      this.stepIndex = 2;
      this.getOrderSummary();
    },
    navigateTo(index) {
      if (this.stepIndex != 3) {
        if (index == 1) {
          if (!this.progress.step2) {
            this.stepIndex = 1;
          }
        } else if (index == 2) {
          if (this.progress.step1 && !this.progress.step2) {
            this.stepIndex = 2;
          }
        }
      }
    },
    cashbackRed(action) {
      if (action == "all") {
        if (this.user.totalBalance >= this.subTotal) {
          this.cashbackReduction = this.subTotal;
        } else {
          this.cashbackReduction = this.user.totalBalance;
        }
      } else if (action == "clear") {
        this.cashbackReduction = 0;
      } else if (action == "edit") {
        this.cashbackReductionEnabled = true;
        document.getElementById("cashbackReductionInput").focus();
      } else if (action == "submitEdit") {
        if (this.customCashback > this.user.totalBalance) {
          this.toast.error(
            `You have no sufficient money. Your balance is: ${this.user.totalBalance}`
          );
          return;
        }

        if (this.customCashback > this.subTotal) {
          this.toast.error(
            `You can't use more than order total. Your order total is: ${this.subTotal}`
          );
          this.cashbackReductionEnabled = false;
          this.cashbackReduction = this.subTotal;
          return;
        }
        this.cashbackReductionEnabled = false;
        this.cashbackReduction = this.customCashback;
      }
    },
  },
};
</script>
