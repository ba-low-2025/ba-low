<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderItem from '@/components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
</script>

<template>
  <div class="flex flex-col w-full h-screen">
    <header>
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
