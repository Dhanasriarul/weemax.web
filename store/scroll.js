import { defineStore } from "pinia";

export const useScrollStore = defineStore("scroll", {
  state: () => ({
    scrollPosition: 0,
    page: "",
  }),
  actions: {
    setScrollPosition(scrollPosition, page) {
      this.scrollPosition = scrollPosition;
      this.page = page;
    },
    getScrollPosition() {
      return this.scrollPosition;
    },
    getPage() {
      return this.page;
    },
  },
});
