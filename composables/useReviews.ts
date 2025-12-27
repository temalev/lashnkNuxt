export interface Review {
  name: string
  date: string
  service: string
  rating: number
  comment: string
}

export const useReviews = () => {
  // Используем useFetch с server: false, чтобы загружать только на клиенте
  // Это решает проблему со статической генерацией
  // В шаблонах Vue автоматически разворачивает ref/computed
  const { data, error } = useFetch<Review[]>('/reviews.json', {
    server: false,
    default: () => []
  })
  
  if (error.value) {
    console.error('Error loading reviews:', error.value)
  }
  
  return data
}
