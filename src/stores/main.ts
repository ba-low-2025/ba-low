import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { NewsItem, EventItem, FriendlyStoreItem } from '@/interfaces/home'

export const useNewsStore = defineStore('news', () => {
  const news = ref<NewsItem[]>([])

  return { news }
})

export const useEventStore = defineStore('event', () => {
  const events = ref<EventItem[]>([])
  function addEvent(event: EventItem) {
    events.value.push(event)
  }
  console.log(events)

  return { events, addEvent }
})

export const useFriendlyStoreStore = defineStore('store', () => {
  const stores = ref<FriendlyStoreItem[]>([])
  console.log(stores)

  return { stores }
})

export const useUserInterfaceStore = defineStore('userInterface', () => {})
