<template>
  <div class="flex gap-2 items-end">
    <p>Filter by Description:</p>
    <form class="flex gap-3 items-end" action="filter">
      <input
        v-model="brandName"
        placeholder="Search by description"
        class="p-1 text-gray-600 rounded-md outline-none"
        type="text"
      />
      <button @click.prevent="handleform" class="btn bg-blue-500">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductStore } from "../store";
const store = useProductStore();

const brandName = ref("");

async function handleform() {
  if (!brandName.value) return alert("Filter value is not a valid brand name");
  await store.fetchProducts(brandName.value);
  brandName.value = "";
  store.toggleResetBtn(true);
}
</script>
