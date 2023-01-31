<template>
  <div class="container mx-auto mt-4 px-2 md:px-0">
    <div class="flex flex-col gap-2 md:flex-row justify-between items-start md:items-end">
      <div class="flex gap-3">
        <FilterVue @onBrendFilter="brendfunc" />
        <button v-if="isReset" @click="handleReset" class="btn bg-blue-500">Reset <i class="fas fa-reset"></i></button>
      </div>
      <div class="flex gap-2">
        <p class="s font-semibold">All Products:</p>
        <p class="">{{ data.total }}</p>
      </div>
    </div>

    <div v-if="data.products" class="my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <CardVue v-for="product in data.products" :key="product.id" :data="product" />
    </div>

    <div v-if="data.products" class="pb-6 flex justify-center">
      <Pagination :data="data" @handlePaginate="handlePaginate" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import CardVue from "../components/Card.vue";
import FilterVue from "../components/Filter.vue";
import Pagination from "../components/Pagination.vue";

const data = ref([]);
const isReset = ref(false);

function handlePaginate(pageNumber = 0) {
  const skip = ref(pageNumber - 1);
  getLists(`?limit=12&skip=${skip.value * 12}`);
}

function handleReset() {
  getLists("?limit=12&skip=0");
  isReset.value = false;
}

function brendfunc(val) {
  getLists(`/search?q=${val}&limit=12&skip=0`);
  isReset.value = true;
} /// brand boyicha search qilish bu apida yoq ekan

async function getLists(val) {
  try {
    const res = await axios.get(`/products${val}`);
    data.value = res.data;
  } catch (e) {
    console.log(e);
  }
}

onMounted(() => {
  getLists("?limit=12&skip=0");
});
</script>
