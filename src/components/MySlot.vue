<template>
  <div>
    <slot :text="greetingMessage" :count="1" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const greetingMessage = ref('Hello World!');
</script>
