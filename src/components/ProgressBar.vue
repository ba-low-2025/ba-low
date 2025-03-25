<script setup lang="ts">
import { ref } from 'vue'

const recallPetitionGoal = 70000
const recallPetitionAmounts = ref(10786)
const progressStyle = recallPetitionAmounts.value < 35000 ? 'progress-error' : 'progress-warning'
</script>

<template>
  <h1 class="w-fit font-display text-xl bg-amber-100 lg:text-3xl">
    {{
      `已達 ${((recallPetitionAmounts / recallPetitionGoal) * 100).toFixed(2)}% 尚須 ${recallPetitionGoal - recallPetitionAmounts} 份`
    }}
  </h1>
  <progress
    class="progress bg-white w-70 h-15 lg:w-96"
    :class="progressStyle"
    :value="recallPetitionAmounts"
    max="70000"
  ></progress>
</template>
