<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderItem from '@/components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
</script>

<template>
  <div class="flex flex-col w-full h-screen">
    <header class="h-15 p-2 flex-grow">
      <HeaderItem />
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="flex-grow">
      <FooterItem />
    </footer>
  </div>
</template>

<style scoped></style>
