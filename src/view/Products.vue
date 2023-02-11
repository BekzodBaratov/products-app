<template>
  <div v-if="products" class="container mx-auto mt-4 px-2 md:px-0">
    <div class="flex flex-col gap-2 md:flex-row justify-between items-start md:items-end">
      <div class="flex gap-3">
        <FilterVue />
        <button v-if="resetBtn" @click="handleReset" class="btn bg-blue-500">Reset <i class="fas fa-reset"></i></button>
      </div>
      <div class="flex gap-2">
        <p class="s font-semibold">All Products:</p>
        <p class="">{{ total }}</p>
      </div>
    </div>

    <div class="my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="product in products" :key="product.id" class="bg-white rounded-md overflow-hidden shadow-md">
        <CardVue :data="product" />
      </div>
    </div>

    <div class="pb-6 flex justify-center">
      <Pagination />
    </div>
  </div>
  <div v-if="loading" class="fixed inset-0 z-50 bg-[#0006] backdrop:blur-md flex items-center justify-center">
    <img :src="svg" alt="loading..." />
  </div>
</template>

<script setup>
import { useProductStore } from "../store";
import CardVue from "../components/Card.vue";
import FilterVue from "../components/Filter.vue";
import Pagination from "../components/Pagination.vue";
import svg from "../assets/loading.gif";
import { storeToRefs } from "pinia";

const store = useProductStore();
const { products, resetBtn, total, loading } = storeToRefs(store);
const { fetchProducts, setSkip, toggleResetBtn } = store;

store.fetchProducts();
toggleResetBtn(false);

async function handleReset() {
  setSkip(0);
  await fetchProducts();
  toggleResetBtn(false);
}
</script>
