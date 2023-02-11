<template>
  <Paginate
    :v-model="store.limit"
    :page-count="pageCount"
    :page-range="3"
    :margin-pages="2"
    :click-handler="handlePageClick"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'paginationUl'"
  >
  </Paginate>
</template>

<script setup>
import { storeToRefs } from "pinia";
import Paginate from "vuejs-paginate-next";
import { useProductStore } from "../store";

const store = useProductStore();
const { pageCount } = storeToRefs(store);
const { setSkip, fetchProducts } = store;

function handlePageClick(pageNumber) {
  setSkip(pageNumber - 1);
  fetchProducts();
}
</script>

<style>
.paginationUl {
  @apply flex border border-gray-300 text-xl bg-gray-100 divide-x cursor-pointer rounded-sm overflow-hidden;
}
.page-item {
  @apply px-2 text-center hover:bg-gray-200 duration-100;
}
.page-item.active {
  @apply bg-gray-200;
}
.page-item.disabled {
  @apply opacity-50;
}
</style>
