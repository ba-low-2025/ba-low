<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import NewsTicker from '@/components/NewsTicker.vue'
import EventCalendar from '@/components/EventCalendar.vue'
import StoreMap from '@/components/StoreMap.vue'
import PrintPetition from '@/components/PrintPetition.vue'
</script>

<template>
  <HeroSection />
  <NewsTicker />
  <div class="h-full min-h-0 lg:flex">
    <div class="flex flex-col p-2 lg:w-1/3">
      <EventCalendar />
    </div>
    <div class="flex flex-col p-2 lg:w-1/3">
      <StoreMap />
    </div>
    <div class="p-2 lg:w-1/3">
      <PrintPetition />
    </div>
  </div>
</template>
