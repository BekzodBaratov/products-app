<template>
  <div class="flex gap-2 items-end">
    <p>Filter by Brand:</p>
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

const brandName = ref("");

const emit = defineEmits(["onBrendFilter"]);

function handleform() {
  emit("onBrendFilter", brandName.value.toLowerCase());
  brandName.value = "";
}
</script>
