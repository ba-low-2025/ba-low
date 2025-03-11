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
  <div class=" lg:flex">
    <EventCalendar />
    <StoreMap />
    <PrintPetition />
  </div>
</template>
