export interface NewsItem {
  id: number
  content: string
  source: string
}

export interface EventItem {
  id: number
  date: Date
  location: string
  googleMapUrl: string
}

export interface FriendlyStoreItem {
  id: number
  location: string
  googleMapUrl: string
}