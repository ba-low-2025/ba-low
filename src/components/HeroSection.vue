<script setup lang="ts">
import CountdownClock from '@/components/CountdownClock.vue'
import ProgressBar from '@/components/ProgressBar.vue'
</script>

<template>
  <div class="hero w-full">
    <div class="hero-content flex-col lg:flex-row lg:space-x-20">
      <img
        src="https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/485795190_122141184326387506_5916621920623132547_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GNddOrD9YugQ7kNvwEFd9wI&_nc_oc=AdkYL-2RRJKOcaoC5bSFejXwIiIeq3JsZBNKzjdmMWPrZb7jBEgtXU-EhkAH4n6UF4k&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=kgTKM7uWBKBnLvGSn8aSWw&oh=00_AfGO9HwFSitwpzR3kBrCfoU7HGFz6mqi_v5_OFUx4pnCuw&oe=6806AA42"
        class="max-w-2xs rounded-lg shadow-2xl"
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
