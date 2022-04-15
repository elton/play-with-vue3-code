<template>
  <div>
    <header>
      <slot name="header" message="hello" />
    </header>
    <main>
      <slot />
    </main>

    <footer>
      <slot name="footer" copyright="prosight" />
    </footer>
  </div>
</template>

<script setup></script>
