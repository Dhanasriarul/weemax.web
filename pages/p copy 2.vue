<script setup>
const route = useRoute();

let isUrl = (path) => {
  return path.includes("http://") || path.includes("https://");
};

const getData = async (path) => {
  try {
    let res = await useFetch(
      `${isUrl(path) ? "" : useRuntimeConfig().public.baseURL}${path}`
    );

    return res.data.value;
  } catch (e) {
    console.log(e);
  }
};

let products = [];
let isLoaded = false;

const getProducts = async () => {
  let result = await getData(
    `/product/products/all?filterable=true${
      route.query.search ? `&keyword=${route.query.search}` : ""
    }${route.query.category ? `&categoryId=${route.query.category}` : ""}`
  ).then((res) => {
    if (res.success) {
      isLoaded = true;
      return res;
    }
    console.log(res.message);
  });

  return result.products;
};

products = await getProducts();

const getCategories = async () => {
  let result = await getData(`/product/category`).then((res) => {
    if (res.success) {
      return res;
    }
    console.log(res.message);
  });

  return result.categories;
};

let categories = await getCategories();

const getOff = (mrp, price) => {
  return Math.floor(((mrp - price) / mrp) * 100);
};

onMounted(async () => {
  watch(
    () => route.query,
    async () => {
      products = await getProducts();
    },
    { immediate: true }
  );
});
</script>

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
              v-model="filters.search"
              size="large"
              placeholder="Search"
              @keyup="searchProducts()"
            />
            {{ filters.search }}
            <div class="absolute -translate-y-1/2 right-2 top-1/2">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <el-select
            v-model="filters.category"
            clearable
            placeholder="Category"
            size="large"
            @change="setCategoryFilter()"
          >
            <el-option
              v-for="(category, index) in categories"
              :key="index"
              :label="category.name"
              :value="category.categoryId"
            />
          </el-select>
          <!-- <el-select
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
          </el-select> -->
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
          <!-- <div
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
          </div> -->
        </div>
        <!-- <div class="flex items-center justify-between w-full gap-3 mb-4">
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
        </div> -->
        <!-- <div>
          <h1
            class="mb-10 text-3xl w-[70%] font-black md:text-4xl text-black md:w-[50%] lg:text-6xl"
          >
            Best Offers
          </h1>
        </div> -->
        <div class="relative flex bg-white">
          <div class="mx-auto max-w-7xl">
            <ProductList
              v-if="isLoaded && renderComponent"
              :products="products"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- key: product-list-2 -->
  </div>
</template>

<script>
import { throttle } from "lodash";

import { nextTick, ref } from "vue";
const renderComponent = ref(true);

const forceRender = async () => {
  // Here, we'll remove MyComponent
  renderComponent.value = false;

  // Then, wait for the change to get flushed to the DOM
  await nextTick();

  // Add MyComponent back in
  renderComponent.value = true;
};

export default {
  data() {
    return {
      filters: {
        search: "",
        category: "",
      },
    };
  },
  methods: {
    async forceRender() {
      // Remove MyComponent from the DOM
      this.renderComponent = false;

      // Then, wait for the change to get flushed to the DOM
      await this.$nextTick();

      // Add MyComponent back in
      this.renderComponent = true;
    },
    searchProducts: throttle(function () {
      useRouter().push({
        query: {
          search: this.filters.search,
        },
      });
      this.forceRender();
    }, 500),
    setCategoryFilter() {
      useRouter().push({
        query: {
          category: this.filters.category,
        },
      });
      this.forceRender();
    },
  },
};
</script>
