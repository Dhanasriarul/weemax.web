<template>
  <div class="font-livvic">
    <NavBar />

    <!-- key: tit-1 -->
    <section class="px-4 md:px-[60px] lg:px-[80px] my-5">
      <h1 class="text-5xl font-black sm:text-7xl lg:text-9xl">
        <span class="text-stroke-black">EXPLORE</span><br />
        COLLECTION
      </h1>
    </section>
    <!-- key: tit-1 -->

    <!-- key: product-list-2 -->
    <section class="px-4 py-10">
      <div class="mx-auto md:max-w-none xl:max-w-7xl">
        <div class="flex flex-wrap gap-5 p-5 mb-5 bg-black/5">
          <div class="max-w-[205px] relative">
            <el-input
              v-model="filters.keyword"
              size="large"
              placeholder="Search"
              @keyup="searchProducts()"
            />
            <div class="absolute -translate-y-1/2 right-2 top-1/2">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <el-select
            v-model="filters.category"
            clearable
            placeholder="Category"
            size="large"
            @change="
              getSubCategories();
              getProducts();
            "
          >
            <el-option
              v-for="(category, index) in categories"
              :key="index"
              :label="category.name"
              :value="category.categoryId"
            />
          </el-select>
          <el-select
            v-model="filters.subCategory"
            clearable
            placeholder="Sub Category"
            size="large"
            @change="getProducts()"
          >
            <el-option
              v-for="(subCategory, index) in subCategories"
              :key="index"
              :label="subCategory.name"
              :value="subCategory.subCategoryId"
            />
          </el-select>
          <!-- <el-select
            v-model="filters.type"
            clearable
            placeholder="Type"
            size="large"
            @change="getProducts()"
          >
            <el-option label="Dress" value="dress" />
            <el-option label="Accessories" value="accessories" />
          </el-select> -->
          <div
            class="h-10 cursor-pointer w-max group relative whitespace-nowrap flex items-center border border-[#dcdfe6] px-10 bg-white text-[#606266]/50 hover:border-[#c0c3c9] rounded"
          >
            <p v-if="filters.priceRange">
              Price: {{ filters.priceRange[0] }} - {{ filters.priceRange[1] }}
            </p>
            <p v-else>Price Range</p>
            <div
              class="group-hover:block hidden absolute top-full left-0 lg:left-1/2 w-full lg:w-auto lg:-translate-x-1/2 z-[999] lg:p-5"
            >
              <div
                class="w-full lg:w-[300px] bg-white border border-[#dcdfe6] rounded shadow-lg p-4"
              >
                <el-slider
                  @change="getProducts()"
                  v-model="filters.priceRange"
                  max="1000"
                  range
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between w-full gap-3 mb-4">
          <p v-if="products">{{ products.length }} results</p>
          <el-select
            v-model="filters.sort"
            clearable
            placeholder="Sort By"
            size="large"
            @change="getProducts()"
          >
            <el-option label="Newest" value="newest" />

            <el-option label="Low - High" value="normalPriceLowToHigh" />

            <el-option label="High - Low" value="normalPriceHighToLow" />
          </el-select>
        </div>
        <!-- <div>
          <h1
            class="mb-10 text-3xl w-[70%] font-black md:text-4xl text-black md:w-[50%] lg:text-6xl"
          >
            Best Offers
          </h1>
        </div> -->
        <div class="relative flex bg-white">
          <div class="mx-auto max-w-7xl">
            <div
              class="grid grid-cols-2 border-gray-200 md:grid-cols-3 lg:grid-cols-4"
            >
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
                  <div
                    class="flex items-center justify-center w-full gap-3 mt-4 h-max"
                  >
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

              <!-- More products... -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- key: product-list-2 -->
  </div>
</template>

<script>
import { debounce } from "lodash";

export default {
  data() {
    return {
      filters: {
        category: "",
        subCategory: "",
        keyword: "",
        sort: "",
        type: "",
        priceRange: null,
      },
      isLoggedIn: false,
      products: [],
      categories: [],
      subCategories: [],
    };
  },
  mounted() {
    this.authCheck();

    this.getProducts();
    this.getCategories();
  },
  methods: {
    async getProducts() {
      await this.$http
        .$get(
          `/product/products/all?filterable=true${
            this.filters.category ? `&categoryId=${this.filters.category}` : ""
          }${
            this.filters.subCategory
              ? `&subCategoryId=${this.filters.subCategory}`
              : ""
          }${this.filters.keyword ? `&keyword=${this.filters.keyword}` : ""}${
            this.filters.sort ? `&sort=${this.filters.sort}` : ""
          }${this.filters.type ? `&type=${this.filters.type}` : ""}${
            this.filters.priceRange
              ? `&normalPriceRange=${this.filters.priceRange[0]}-${this.filters.priceRange[1]}`
              : ""
          }
        `
        )
        .then((res) => {
          if (res.success) {
            this.products = res.products;
            return;
          }
          this.toast.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getCategories() {
      await this.$http
        .$get(`/product/category`)
        .then((res) => {
          if (res.success) {
            this.categories = res.categories;
            return;
          }
          this.toast.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getSubCategories() {
      await this.$http
        .$get(`/product/category/${this.filters.category}`)
        .then((res) => {
          if (res.success) {
            this.subCategories = res.subCategories;
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
          return;
        }
        // window.location.href = "/login";
      }
    },
    getOff(mrp, price) {
      return Math.floor(((mrp - price) / mrp) * 100);
    },
    searchProducts: debounce(function () {
      this.getProducts();
    }, 500),
  },
};
</script>
