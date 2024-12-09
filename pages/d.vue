<template>
  <div>
    <NavBar />

    <div class="bg-white">
      <div class="pt-6 pb-16 sm:pb-24">
        <div
          class="flex flex-col max-w-2xl px-4 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:flex-row"
        >
          <!-- Image gallery -->
          <div class="w-full lg:w-[60%]">
            <h2 class="sr-only">Images</h2>
            <div class="swiper mySwiper6 lg:hidden">
              <div class="swiper-wrapper">
                <div
                  v-for="(asset, index) in assets"
                  :key="index"
                  class="swiper-slide"
                >
                  <img
                    :src="asset"
                    class="object-cover w-full h-full rounded-lg lg:col-span-2 lg:row-span-2"
                  />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div
              class="hidden grid-cols-1 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-8"
            >
              <img
                v-if="product.assetOne"
                :src="product.assetOne"
                class="object-cover w-full h-full rounded-lg lg:col-span-2 lg:row-span-2"
              />
              <img
                v-if="product.assetTwo"
                :src="product.assetTwo"
                class="hidden object-cover w-full h-full rounded-lg lg:block"
              />
              <img
                v-if="product.assetThree"
                :src="product.assetThree"
                class="hidden object-cover w-full h-full rounded-lg lg:block"
              />
              <img
                v-if="product.assetFour"
                :src="product.assetFour"
                class="hidden object-cover w-full h-full rounded-lg lg:block lg:col-span-2 lg:row-span-2"
              />
            </div>
          </div>
          <div class="py-5 lg:py-0 lg:px-5 h-max lg:w-[40%] lg:sticky lg:top-5">
            <div class="">
              <div class="flex justify-between">
                <div>
                  <h1 class="text-2xl font-medium text-gray-900">
                    {{ product.productTitle }}
                  </h1>

                  <div
                    class="px-2 py-1 mt-3 font-bold text-black bg-[#75c3ff] w-max"
                  >
                    {{ getOff(product.mrpPrice, product.normalPrice) }}% Off
                  </div>
                </div>
                <div class="flex flex-col items-center">
                  <p class="text-4xl font-medium text-center text-gray-900">
                    ₹{{ product.normalPrice }}
                  </p>
                  <p class="text-center text-red-300">
                    <del>₹{{ product.mrpPrice }}</del>
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-8 lg:col-span-5">
              <div>
                <!-- Color picker -->
                <div>
                  <h2 class="text-sm font-medium text-gray-900">Color</h2>

                  <fieldset class="mt-2">
                    <legend class="sr-only">Choose a color</legend>
                    <div class="flex items-center space-x-3">
                      <div v-for="(color, index) in inventory" :key="index">
                        <div
                          @click="selectColor(index)"
                          class="w-8 h-8 rounded-xl"
                          :class="
                            index == selectedColorIndex
                              ? 'ring-2 ring-offset-2 ring-black/60'
                              : ''
                          "
                          :style="`background: ${color.colorCode};`"
                        ></div>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <!-- Size picker -->
                <div class="mt-8">
                  <div class="flex items-center justify-between">
                    <h2 class="text-sm font-medium text-gray-900">Size</h2>
                  </div>

                  <fieldset class="mt-2">
                    <legend class="sr-only">Choose a size</legend>
                    <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      <div v-for="(size, index) in sizes" :key="index">
                        <div
                          @click="changeSize(index)"
                          class="relative flex items-center justify-center px-3 py-3 overflow-hidden text-sm font-medium uppercase border rounded-md sm:flex-1 focus:outline-none"
                          :class="
                            size.quantity == 0
                              ? 'bg-black/20 cursor-not-allowed'
                              : index == selectedSizeIndex
                              ? 'font-bold border-2 border-black/60'
                              : ''
                          "
                        >
                          {{ size.size }}
                          <div
                            v-if="size.quantity == 0"
                            class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
                          >
                            <i class="text-3xl fa-solid fa-slash"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div class="flex gap-2">
                  <button
                    @click="addBasket()"
                    class="flex items-center justify-center w-full px-8 py-3 mt-8 text-base font-medium text-white border border-transparent rounded-md bg-black/70 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    Add to cart
                  </button>
                  <button
                    v-if="isLiked == false"
                    @click="addWishlist()"
                    class="flex items-center justify-center px-4 mt-8 text-base font-medium text-white border border-transparent rounded-md w-max bg-black/70 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    <i class="fa-regular fa-heart"></i>
                  </button>
                  <button
                    v-if="isLiked == true"
                    @click="removeWishlist()"
                    class="flex items-center justify-center px-4 mt-8 text-base font-medium text-white border border-transparent rounded-md w-max bg-black/70 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    <i class="fa-solid fa-heart"></i>
                  </button>
                  <button
                    v-if="isLoggedIn && isCareerApproved"
                    @click="
                      copyToClipboard(
                        `${url}/d?productId=${product.productId}${
                          isCareerApproved ? `&fl=${careerReferralCode}` : ''
                        }`
                      )
                    "
                    class="flex items-center justify-center px-4 mt-8 text-base font-medium text-white border border-transparent rounded-md w-max bg-black/70 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    <i class="fa-solid fa-share-nodes"></i>
                  </button>
                  <button
                    v-else
                    @click="
                      copyToClipboard(`${url}/d?productId=${product.productId}`)
                    "
                    class="flex items-center justify-center px-4 mt-8 text-base font-medium text-white border border-transparent rounded-md w-max bg-black/70 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    <i class="fa-solid fa-share-nodes"></i>
                  </button>
                </div>
              </div>

              <!-- Product details -->
              <div class="mt-10">
                <h2 class="text-sm font-medium text-gray-900">Description</h2>

                <div class="mt-4 prose-sm prose text-gray-500">
                  <p>
                    {{ product.description }}
                  </p>
                </div>
              </div>

              <!-- <div class="pt-8 mt-8 border-t border-gray-200">
                <h2 class="text-sm font-medium text-gray-900">
                  Fabric &amp; Care
                </h2>

                <div class="mt-4 prose-sm prose text-gray-500">
                  <ul role="list">
                    <li>Only the best materials</li>
                    <li>Ethically and locally made</li>
                    <li>Pre-washed and pre-shrunk</li>
                    <li>Machine wash cold with similar colors</li>
                  </ul>
                </div>
              </div> -->

              <!-- Policies -->
              <section aria-labelledby="policies-heading" class="mt-10">
                <h2 id="policies-heading" class="sr-only">Our Policies</h2>

                <dl
                  class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
                >
                  <div
                    class="p-6 text-center border border-gray-200 rounded-lg bg-gray-50"
                  >
                    <dt>
                      <svg
                        class="flex-shrink-0 w-6 h-6 mx-auto text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                        />
                      </svg>
                      <span class="mt-4 text-sm font-medium text-gray-900"
                        >Free Delivery</span
                      >
                    </dt>
                    <dd class="mt-1 text-sm text-gray-500">
                      Its holy ship! Enjoy free shipping on orders above ₹999.
                      Get your orders within 7days.
                    </dd>
                  </div>
                  <div
                    class="p-6 text-center border border-gray-200 rounded-lg bg-gray-50"
                  >
                    <dt>
                      <svg
                        class="flex-shrink-0 w-6 h-6 mx-auto text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span class="mt-4 text-sm font-medium text-gray-900"
                        >Cashback</span
                      >
                    </dt>
                    <dd class="mt-1 text-sm text-gray-500">
                      Buy this {{ product.subCategoryName }} & Get upto ₹{{
                        product.refundTo
                      }}
                      assured cashback.
                    </dd>
                  </div>
                </dl>
              </section>

              <div class="mt-10" v-if="product.sizeChart">
                <h2 class="text-sm font-medium text-gray-900">Size Chart</h2>
                <img :src="product.sizeChart" class="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section
      v-if="cartIsOpen"
      class="h-full w-[90%] max-w-md bg-white shadow-xl fixed top-0 right-0 z-[9999]"
    >
      <div
        class="relative flex flex-col h-full overflow-y-scroll hide-scrollbar"
      >
        <div
          class="flex-1 px-4 py-6 overflow-y-auto hide-scrollbar sm:px-6 pb-[145px]"
        >
          <div class="flex items-start justify-between">
            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
              Shopping cart
            </h2>
            <div @click="cartIsOpen = false" class="flex items-center ml-3 h-7">
              <svg
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <div class="mt-8">
            <div class="flow-root">
              <ul role="list" class="-my-6 divide-y divide-gray-200">
                <li
                  v-for="(product, index) in basketItems"
                  :key="index"
                  class="flex py-6"
                >
                  <div
                    class="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md"
                  >
                    <img
                      :src="product.assetOne"
                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                      class="object-cover object-center w-full h-full"
                    />
                  </div>

                  <div class="flex flex-col flex-1 ml-4">
                    <div>
                      <div
                        class="flex justify-between text-base font-medium text-gray-900"
                      >
                        <h3>
                          <a href="#">{{ product.productTitle }}</a>
                        </h3>
                        <p class="ml-4">
                          Rs.
                          {{ product.normalPrice }}
                        </p>
                      </div>
                      <div class="flex items-center gap-3 mt-1">
                        <p class="text-sm font-black text-gray-500">
                          {{ product.size }}
                        </p>
                        <div
                          class="w-3 h-3 rounded-full"
                          :style="`background: ${product.colorCode}`"
                        ></div>
                      </div>
                    </div>
                    <div class="flex items-end justify-between flex-1 text-sm">
                      <!-- <p class="text-gray-500">Qty 1</p> -->
                      <div>
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
                      </div>

                      <div class="flex">
                        <i
                          @click="
                            removeBasket(product.productId, product.inventoryId)
                          "
                          class="text-red-500 fa-regular fa-trash-can"
                        ></i>
                      </div>
                    </div>
                  </div>
                </li>

                <!-- More products... -->
              </ul>
            </div>
          </div>
        </div>

        <div
          class="px-4 py-6 border-t border-gray-200 sm:px-6 h-[140px] absolute bottom-0 w-full"
        >
          <!-- <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div> -->
          <p class="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div class="mt-6">
            <NuxtLink
              to="/checkout"
              class="flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-black/70 hover:bg-black"
              >Checkout</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>
    <!-- key: cart-side -->
    <Footer v-if="isLoaded" />
    <Loader v-if="isLoading" />
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      config: useRuntimeConfig(),
      toast: useToast(),
      count: 1,
      productId: this.$route.query.productId,
      swipers: {
        showcase1: null,
        product: null,
      },
      cartIsOpen: false,
      isLoggedIn: false,
      isLoading: true,
      isLoaded: false,
      product: {},
      inventory: [],
      selectedColorIndex: "",
      selectedSizeIndex: "",
      sizes: [],
      basketItems: [],
      isLiked: false,
      referCode: "",
      url: "",
      assets: [],
      user: {},
      isCareerApproved: false,
      careerReferralCode: "",
    };
  },
  mounted() {
    if (window.location.hostname == "localhost") {
      this.url = "http://localhost:3000";
    } else {
      this.url = "https://www.weemax.in";
    }

    if (this.$route.query.fl) {
      window.localStorage.setItem(
        "weemaxCareerReferCode",
        this.$route.query.fl
      );

      this.$http
        .$post(`/career/click`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
          body: {
            code: this.$route.query.fl,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    this.authCheck();
    this.getProduct();
    this.getUser();
    this.swipers.showcase1 = new window.Swiper(".showcase1", {
      slidesPerView: "auto",
      spaceBetween: 15,
      freeMode: true,
      navigation: {
        nextEl: ".showcase1-nxt-btn3",
        prevEl: ".showcase1-prev-btn3",
      },
    });
    this.swipers.product = new window.Swiper(".mySwiper6", {
      grabCursor: true,
      effect: "creative",
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      creativeEffect: {
        prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
        },
      },
    });

    if (this.$route.query.shareId) {
      window.localStorage.setItem("weemaxReferCode", this.$route.query.shareId);
    }
  },
  methods: {
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

            if (res.user.isCareerApproved) {
              this.isCareerApproved = res.user.isCareerApproved;
              this.careerReferralCode = res.user.careerReferralCode;
            }
            return;
          }
          console.log(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProduct() {
      this.$http
        .$get(`/product/${this.productId}`)
        .then((res) => {
          if (res.success) {
            this.product = res.product;
            this.inventory = res.inventory;

            if (this.inventory.length > 0) {
              this.selectedColorIndex = 0;
              if (this.inventory[0].sizes.length > 0) {
                this.sizes = this.inventory[0].sizes;
                this.selectedSizeIndex = 0;
              }
            }

            if (this.product.assetOne) {
              this.assets.push(this.product.assetOne);
            }
            if (this.product.assetTwo) {
              this.assets.push(this.product.assetTwo);
            }
            if (this.product.assetThree) {
              this.assets.push(this.product.assetThree);
            }
            if (this.product.assetFour) {
              this.assets.push(this.product.assetFour);
            }

            this.isLoading = false;
            this.isLoaded = true;

            return;
          }
          this.$router.push({
            path: "/",
          });
        })
        .catch((err) => {
          console.log(err);
          this.$router.push({
            path: "/",
          });
        });
    },
    copyToClipboard(text) {
      if (navigator.share) {
        // Replace "Your title" with a meaningful title for your link
        // Replace "Your description" with a meaningful description for your link
        // Replace "your-link-here" with the actual URL you want to share
        navigator
          .share({
            title: "",
            text: "",
            url: text,
          })
          .then(() => console.log("Link shared successfully!"))
          .catch((error) => console.error("Error sharing link:", error));
      } else {
        // Create a temporary textarea element
        const textarea = document.createElement("textarea");
        textarea.value = text;

        // Make the textarea non-editable
        textarea.setAttribute("readonly", "");

        // Set the position to absolute to remove it from document flow
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";

        // Append the textarea to the document
        document.body.appendChild(textarea);

        // Copy the text from the textarea
        textarea.select();
        document.execCommand("copy");

        // Remove the textarea from the document
        document.body.removeChild(textarea);

        this.toast.success("Link copied to clipboard");
      }
    },
    addWishlist() {
      if (!this.isLoggedIn) {
        this.$router.push("/login");
        return;
      }

      this.$http
        .$post(`/product/wishlist?productId=${this.productId}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "weemaxAccessToken"
            )}`,
          },
        })
        .then((res) => {
          if (res.success) {
            console.log("added");
            this.getWishlist();
            return;
          }
          console.log("err");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeWishlist() {
      if (!this.isLoggedIn) {
        this.$router.push("/login");
        return;
      }

      this.$http
        .$delete(`/product/wishlist?productId=${this.productId}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "weemaxAccessToken"
            )}`,
          },
        })
        .then((res) => {
          if (res.success) {
            this.isLiked = false;
            return;
          }
          console.log("err");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getWishlist() {
      this.$http
        .$get(`/product/wishlist/all?productId=${this.productId}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "weemaxAccessToken"
            )}`,
          },
        })
        .then((res) => {
          if (res.success) {
            if (res.isLiked) {
              this.isLiked = res.isLiked;
            }
          }
        });
    },
    addBasket() {
      if (!this.isLoggedIn) {
        this.$router.push("/login");
        return;
      }

      let inventoryId =
        this.inventory[this.selectedColorIndex].sizes[this.selectedSizeIndex]
          .inventoryId;

      this.$http
        .$post(
          `/product/basket?productId=${this.productId}&quantity=1&inventoryId=${inventoryId}`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                "weemaxAccessToken"
              )}`,
            },
          }
        )
        .then((res) => {
          if (!res.success) {
            this.toast.error(res.message);
          }
          this.cartIsOpen = true;
          this.getBasket();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBasket() {
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
            this.basketItems = res.basketItems;
            return;
          }
          this.toast.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    authCheck() {
      const token = window.localStorage.getItem("weemaxAccessToken");
      let expTime = window.localStorage.getItem("weemaxAccessTokenExp");

      expTime = Math.floor(new Date(expTime).getTime() / 1000);
      let currentTime = Math.floor(Date.now() / 1000);

      if (token) {
        if (expTime > currentTime) {
          this.isLoggedIn = true;
          this.getWishlist();
          this.getReferCode();
          return;
        }
        // window.location.href = "/login";
      }
    },
    removeBasket(id, inventoryId) {
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
            this.getProduct();
            this.getBasket();
            this.toast.success(res.message);
            return;
          }
          this.toast.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getReferCode() {
      this.$http
        .$get("/user/profile", {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "weemaxAccessToken"
            )}`,
          },
        })
        .then((res) => {
          if (res.success) {
            this.referCode = res.user.referralCode;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectColor(index) {
      this.selectedColorIndex = index;
      this.sizes = this.inventory[index].sizes;
      this.selectedSizeIndex = "";
    },
    changeSize(index) {
      this.selectedSizeIndex = index;
    },
    getOff(mrp, price) {
      return Math.floor(((mrp - price) / mrp) * 100);
    },
    changeQty(index, action) {
      let product = this.basketItems[index];

      if (action == "add") {
        if (product.maxQuantity > product.quantity) {
          this.$http
            .$put(
              `/product/basket?productId=${product.productId}&inventoryId=${
                product.inventoryId
              }&quantity=${this.basketItems[index].quantity + 1}`,
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
                this.getProduct();
                this.getBasket();
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
              }&quantity=${this.basketItems[index].quantity - 1}`,
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
                this.getProduct();
                this.getBasket();
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
  },
};
</script>
