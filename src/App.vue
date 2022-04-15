<script setup>
import Chapter01 from './components/Chapter01.vue';
import MyComponent from './components/MyComponent.vue';
import MySlot from './components/MySlot.vue';
import FancyList from './components/FancyList.vue';
</script>

<template>
  <div class="m-4 text-sm text-neutral-600">
    <Chapter01 />

    <MyComponent>
      <template #header="headerProps">
        <h1>Here might be a page title</h1>
        header message: {{ headerProps.message }}
      </template>
      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template #footer="{ copyright }">
        <p>Here's some contact info</p>
        <p>copyright: {{ copyright }}</p>
      </template>
    </MyComponent>

    <!-- <MySlot v-slot="slotProps"> -->
    <MySlot v-slot="{ text, count }">
      <p>{{ text }}</p>
      <p>{{ count }}</p>
    </MySlot>

    <FancyList :api-url="url" :per-page="10">
      <template #item="{ item }">
        <li>
          <p>{{ item.body }}</p>
          <p>{{ item.username }}</p>
          <p>{{ item.likes }}</p>
        </li>
      </template>
    </FancyList>
  </div>
</template>
