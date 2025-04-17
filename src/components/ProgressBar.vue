<script setup lang="ts">
import { ref } from 'vue'

const recallPetitionGoal = 40000
const recallPetitionAmounts = ref(23000)
const progressStyle = recallPetitionAmounts.value < 35000 ? 'progress-error' : 'progress-warning'
</script>

<template>
  <h1 class="w-fit font-bold font-display text-xl lg:text-3xl">
    {{
      `已達 ${((recallPetitionAmounts / recallPetitionGoal) * 100).toFixed(2)}% 尚須 ${recallPetitionGoal - recallPetitionAmounts} 份`
    }}
  </h1>
  <progress
    class="progress bg-neutral-300 w-70 h-15 lg:w-96"
    :class="progressStyle"
    :value="recallPetitionAmounts"
    max="40000"
  ></progress>
</template>
