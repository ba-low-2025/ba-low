<script setup lang="ts">
import { ref } from 'vue';

const recallPetitionAmounts = ref(10000)
const progressStyle = recallPetitionAmounts.value < 35000 ? "progress-error" : "progress-warning"
</script>

<template>
  <progress class="progress progress-error w-70 h-15 lg:w-96" :class="{progress: progressStyle}" :value="recallPetitionAmounts" max="70000"></progress>
</template>