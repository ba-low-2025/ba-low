<script setup lang="ts">
import CountdownClock from '@/components/CountdownClock.vue'
</script>

<template>
  <div class="bg-blue-500 p-5 flex flex-col lg:flex-row">
    <div class="space-y-5 flex flex-col justify-center">
      <h1 class="font-display text-xl lg:text-3xl">
        罷免二階即將截止！即刻行動！
      </h1>
      <CountdownClock />
    </div>
  </div>
</template>
