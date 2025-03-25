<script setup lang="ts">
import CountdownClock from '@/components/CountdownClock.vue'
import ProgressBar from '@/components/ProgressBar.vue'
</script>

<template>
  <div class="hero w-full">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/474583817_122134859684387506_4853398245680868548_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ck79dFJ0oIUQ7kNvgH_bN3l&_nc_oc=AdkMKQ4qJw_VvljbpwA8z4FNPOdCPsD1TLdNA1v9TWitZpIZTYmx0Bxg1M0v4wywTPU&_nc_zt=23&_nc_ht=scontent-ams4-1.xx&_nc_gid=5kPoX8jKmJ_Kj-mGPYGESw&oh=00_AYFx-YSNPwfMQZtu1jEQXTRChDGrCkjjcTgjm4hovO_a7w&oe=67E892F2"
        class="max-w-3xs rounded-lg shadow-2xl"
      />
      <div class="space-y-5">
        <div class="space-y-5 flex flex-col justify-center">
          <h1 class="text-xl font-bold font-display lg:text-5xl">罷免二階即將截止！即刻行動！</h1>
          <CountdownClock />
        </div>
        <div class="space-y-5 flex flex-col justify-centers">
          <ProgressBar />
        </div>
        <!-- <button class="btn btn-primary">Get Started</button> -->
      </div>
    </div>
  </div>
</template>
