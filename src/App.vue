<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderItem from '@/components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
</script>

<template>
  <div class="flex flex-col w-full">
    <header class="text-sm/tight text-center">
      <HeaderItem />
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <FooterItem />
    </footer>
  </div>
</template>

<style scoped></style>
