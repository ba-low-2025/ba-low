import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', () => {
  const news = ref(0)
  const doubleCount = computed(() => news.value * 2)
  function increment() {
    news.value++
  }

  return { news, doubleCount, increment }
})

export const useEventStore = defineStore('event', () => {
  const event = ref({})
  console.log(event)
})

export const useFriendlyStoreStore = defineStore('store', () => {
  const store = ref({})
  console.log(store)
})

export const useUserInterfaceStore = defineStore('userInterface', () => {

})