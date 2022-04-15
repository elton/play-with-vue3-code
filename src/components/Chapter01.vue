<!--
 Copyright (c) 2022 Elton Zheng
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<template>
  <div class="text-xl text-amber-800 font-mono">{{ count }}</div>
  <button @click="add" class="btn-primary mt-2">add</button>
</template>

<script setup>
import Count from '../lib/count';

const { count, add } = Count();
</script>
