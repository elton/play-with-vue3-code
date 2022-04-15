<script setup>
import { ref } from 'vue';

const props = defineProps(['api-url', 'per-page']);
const items = ref([]);

setTimeout(() => {
  items.value = [
    { body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
    { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 },
  ];
}, 1000);
</script>

<template>
  <ul>
    <li v-if="!items.length">Loading...</li>
    <li v-for="item in items">
      <slot name="item" :item="item" />
    </li>
  </ul>
</template>
