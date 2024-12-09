<template>
  <div>
    <h1>Test</h1>
    <keep-alive>
      <div v-for="(section, index) in sections" :key="index">
        <NuxtLink :to="`/testroute/${index}`" @click="saveScrollPosition">
          <div class="h-[500px] w-[500px] bg-red-400">
            {{ section.sectionKey }}
          </div>
        </NuxtLink>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import { useScrollStore } from "~/store/scroll";

export default {
  data() {
    return {
      scrollStore: useScrollStore(),
      sections: [],
    };
  },
  mounted() {
    console.log(this.sections);
  },
  beforeMount() {
    this.getSelection();
  },
  methods: {
    async getSelection() {
      await this.$http
        .$get(`/page/getSections?pageId=1`, {
          headers: {
            Authorization:
              "Bearer " + window.localStorage.getItem("weemaxAccessToken"),
          },
        })
        .then((res) => {
          if (res.success) {
            this.sections = res.sections;

            // this.getScrollPosition();
            return;
          }
          this.toast.error(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    saveScrollPosition() {},
    getScrollPosition() {},
  },
};
</script>
