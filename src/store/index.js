import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    loading: false,
    products: [],
    limit: 20,
    skip: 0,
    total: null,
    resetBtn: false,
  }),
  getters: {
    pageCount() {
      return Math.ceil(this.total / this.limit);
    },
  },
  actions: {
    async fetchProducts(val = "") {
      try {
        this.loading = true;
        const res = await axios.get(`/products/search?q=${val}&limit=${this.limit}&skip=${this.skip}`);
        this.products = res.data.products;
        this.total = res.data.total;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    setSkip(skip) {
      this.skip = skip * this.limit;
    },
    toggleResetBtn(boolean) {
      this.resetBtn = boolean;
    },
  },
});
