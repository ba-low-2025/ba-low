<script setup lang="ts">
import CountdownClock from '@/components/CountdownClock.vue'
import ProgressBar from '@/components/ProgressBar.vue';
</script>

<template>
  <div
  class="hero w-full p-5 flex flex-col justify-around items-center bg-contain lg:flex-row"
  style="background-image: url(https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/484339805_122141273546387506_2620765745331271053_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-8VL4AFOYLYQ7kNvgEUyr6t&_nc_oc=Adk26R-19W1XnWDC66APLESr0EglrHupW4c5lMDTg-QNPmJ00vVRBJ4bTqHlrw-QZLs&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=BhUqUv4YFbQISQj-83fA-w&oh=00_AYHsqX0wTX9jpDU75_U4dt-fT0fJ3gK9HNhBY0OWxEhcPw&oe=67E73F52);">
    <div class="space-y-5 flex flex-col justify-center">
      <h1 class="w-fit font-display font-extrabold text-xl bg-amber-100 lg:text-3xl">
        罷免二階即將截止！即刻行動！
      </h1>
      <CountdownClock />
    </div>
    <div class="space-y-5 flex flex-col justify-centers">
      <ProgressBar />
    </div>
  </div>
</template>
