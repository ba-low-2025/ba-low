<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  updateCountdown()
  timer = window.setInterval(updateCountdown, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})

const deadline = new Date('2025-04-25T00:00:00')

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timer: number

function updateCountdown() {
  const now = new Date()
  const diff = deadline.getTime() - now.getTime()

  if (diff <= 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    clearInterval(timer)
    return
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
  minutes.value = Math.floor((diff / (1000 * 60)) % 60)
  seconds.value = Math.floor((diff / 1000) % 60)
}
</script>

<template>
  <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
    <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
      <span class="countdown font-mono text-5xl">
        <span :style="{ '--value': days }" aria-live="polite" :aria-label="`${days}`">{{
          days
        }}</span>
      </span>
      days
    </div>
    <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
      <span class="countdown font-mono text-5xl">
        <span :style="{ '--value': hours }" aria-live="polite" :aria-label="`${hours}`">{{
          hours
        }}</span>
      </span>
      hours
    </div>
    <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
      <span class="countdown font-mono text-5xl">
        <span :style="{ '--value': minutes }" aria-live="polite" :aria-label="`${minutes}`">{{
          minutes
        }}</span>
      </span>
      min
    </div>
    <div class="hidden bg-neutral rounded-box text-neutral-content p-2 lg:flex lg:flex-col">
      <span class="countdown font-mono text-5xl">
        <span :style="{ '--value': seconds }" aria-live="polite" :aria-label="`${seconds}`">{{
          seconds
        }}</span>
      </span>
      sec
    </div>
  </div>
</template>
