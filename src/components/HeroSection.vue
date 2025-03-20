<script setup lang="ts">
import CountdownClock from '@/components/CountdownClock.vue'
import ProgressBar from '@/components/ProgressBar.vue';
</script>

<template>
  <div class="w-full bg-blue-500 p-5 flex flex-col justify-around items-center lg:flex-row">
    <div class="space-y-5 flex flex-col justify-center">
      <h1 class="font-display text-xl lg:text-3xl">
        罷免二階即將截止！即刻行動！
      </h1>
      <CountdownClock />
    </div>
    <div class="space-y-5 flex flex-col justify-centers">
      <h1 class="font-display text-xl lg:text-3xl">
        尚須 60,000 份
      </h1>
      <ProgressBar />
    </div>
  </div>
</template>
