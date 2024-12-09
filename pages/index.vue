<script setup async>
let isLoading = true;

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

const getPage = async () => {
  try {
    let res = await useFetch(
      `${useRuntimeConfig().public.baseURL}/page/getPage?route=home`
    );

    let page = res.data.value.page;

    return page;
  } catch (e) {
    console.log(e);
  }
};

let page = await getPage();

const getSections = async () => {
  try {
    let res = await useFetch(
      `${useRuntimeConfig().public.baseURL}/page/getSections?pageId=${
        page.pageId
      }`
    );

    let sections = res.data.value.sections;

    return sections;
  } catch (e) {
    console.log(e);
  }
};

let sections = await getSections();
isLoading = false;
</script>

<template>
  <div class="font-livvic">
    <NavBar />

    <div
      v-if="isLoading == false"
      v-for="(section, index) in sections"
      :key="index"
    >
      <!-- key: ban-1 -->
      <BanOne v-if="section.sectionKey == 'ban-1'" :data="section.data" />
      <!-- key: ban-1 -->

      <!-- key: ban-1 -->
      <BanOneProduct
        v-if="section.sectionKey == 'ban-1-product'"
        :data="section.data"
      />
      <!-- key: ban-1 -->

      <!-- key: sec-t-sel -->
      <SecTSel v-if="section.sectionKey == 'sec-t-sel'" :data="section.data" />
      <!-- key: sec-t-sel -->

      <!-- key: sec-t-sel -->
      <SecTSelProduct
        v-if="section.sectionKey == 'sec-t-sel-product'"
        :data="section.data"
      />
      <!-- key: sec-t-sel -->

      <!-- key: tit-1 -->
      <TitOne v-if="section.sectionKey == 'tit-1'" :data="section.data" />
      <!-- key: tit-1 -->

      <!-- key: sec-h-1 -->
      <SecHOne v-if="section.sectionKey == 'sec-h-1'" :data="section.data" />
      <!-- key: sec-h-1 -->

      <!-- key: sec-h-1 -->
      <SecHOneProduct
        v-if="section.sectionKey == 'sec-h-1-product'"
        :data="section.data"
      />
      <!-- key: sec-h-1 -->

      <!-- key: pro-slide-1 -->
      <ProSlideOne
        v-if="section.sectionKey == 'pro-slide-1'"
        :data="section.data"
      />
      <!-- key: pro-slide-1 -->

      <!-- key: pro-slide-1 -->
      <ProSlideOneProduct
        v-if="section.sectionKey == 'pro-slide-1-product'"
        :data="section.data"
      />
      <!-- key: pro-slide-1 -->

      <!-- key: pro-slide-2 -->
      <ProSlideTwo
        v-if="section.sectionKey == 'pro-slide-2'"
        :data="section.data"
      />
      <!-- key: pro-slide-2 -->

      <!-- key: pro-slide-2 -->
      <ProSlideTwoProduct
        v-if="section.sectionKey == 'pro-slide-2-product'"
        :data="section.data"
      />
      <!-- key: pro-slide-2 -->

      <!-- key: card-1 -->
      <CardOne v-if="section.sectionKey == 'card-1'" :data="section.data" />
      <!-- key: card-1 -->

      <!-- key: card-1 -->
      <CardOneProduct
        v-if="section.sectionKey == 'card-1-product'"
        :data="section.data"
      />
      <!-- key: card-1 -->

      <!-- key: card-2 -->
      <CardTwo v-if="section.sectionKey == 'card-2'" :data="section.data" />
      <!-- key: card-2 -->

      <!-- key: card-2 -->
      <CardTwoProduct
        v-if="section.sectionKey == 'card-2-product'"
        :data="section.data"
      />
      <!-- key: card-2 -->

      <!-- key: card-3 -->
      <!-- <CardThree v-if="section.sectionKey == 'card-3'" :data="section.data" /> -->
      <!-- key: card-3 -->

      <!-- key: card-4 -->
      <CardFour v-if="section.sectionKey == 'card-4'" :data="section.data" />
      <!-- key: card-4 -->

      <!-- key: card-4 -->
      <CardFourProduct
        v-if="section.sectionKey == 'card-4-product'"
        :data="section.data"
      />
      <!-- key: card-4 -->

      <!-- key: lay-1 -->
      <LayOne v-if="section.sectionKey == 'lay-1'" :data="section.data" />
      <!-- key: lay-1 -->

      <!-- key: lay-1 -->
      <LayOneProduct
        v-if="section.sectionKey == 'lay-1-product'"
        :data="section.data"
      />
      <!-- key: lay-1 -->

      <!-- key: grid-lay -->
      <GridLay v-if="section.sectionKey == 'grid-lay'" :data="section.data" />
      <!-- key: grid-lay -->

      <!-- key: grid-lay -->
      <GridLayProduct
        v-if="section.sectionKey == 'grid-lay-product'"
        :data="section.data"
      />
      <!-- key: grid-lay -->

      <!-- key: product-list-2 -->
      <ProductListTwo
        v-if="section.sectionKey == 'product-list-2'"
        :data="section.data"
      />
      <!-- key: product-list-2 -->
    </div>

    <!-- key: product-list-1 -->
    <!-- <ProductListOne /> -->
    <!-- key: product-list-1 -->

    <!-- key: showcase-1 -->
    <!-- <ShowcaseOne /> -->
    <!-- key: showcase-1 -->

    <!-- key: cat-1 -->
    <!-- <CatOne /> -->
    <!-- key: cat-1 -->
    <Footer v-if="!isLoading" />
    <Loader v-if="isLoading" />
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      toast: useToast(),
    };
  },
  mounted() {
    if (this.$route.query.shareId) {
      window.localStorage.setItem("weemaxReferCode", this.$route.query.shareId);
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
  },
  methods: {
    getPage() {
      this.$http
        .$get(`/page/getPage?route=home`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          if (res.success) {
            this.$http
              .$get(`/page/getSections?pageId=${res.page.pageId}`, {
                headers: {
                  Authorization:
                    "Bearer " +
                    window.localStorage.getItem("weemaxAccessToken"),
                },
              })
              .then((res) => {
                if (res.success) {
                  this.sections = res.sections;
                  this.isLoading = false;
                  this.isLoaded = true;
                  return;
                }
                this.toast.error(res.message);
              })
              .catch((err) => {
                console.log(err);
              });
            return;
          }
          this.$route.push("/404");
          this.toast.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
ul,
li,
a,
button,
input {
  font-family: "Livvic", sans-serif !important;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.text-stroke-white {
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}
.text-stroke-black {
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.fade {
  animation: fade 1s;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
