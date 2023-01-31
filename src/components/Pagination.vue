<template>
  <Paginate
    :v-model="12"
    :page-count="Math.ceil(data.total / data.limit)"
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
import { ref, watch } from "vue";
import Paginate from "vuejs-paginate-next";

const emit = defineEmits(["handlePaginate"]);
const props = defineProps(["data"]);
const data = ref({ limit: 12, total: 100 }); //default

watch(
  () => props.data,
  () => {
    if (!props.data.products) return;
    data.value = {
      limit: props.data.limit,
      total: props.data.total,
    };
  }
);

function handlePageClick(pageNumber) {
  emit("handlePaginate", pageNumber);
}
</script>

<style>
.paginationUl {
  @apply flex border border-gray-300 bg-gray-100 divide-x cursor-pointer rounded-sm overflow-hidden;
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
