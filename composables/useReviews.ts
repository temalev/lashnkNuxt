export interface Review {
  name: string
  date: string
  service: string
  rating: number
  comment: string
}

export const useReviews = async () => {
  try {
    const { data } = await useFetch<Review[]>('/reviews.json')
    return data.value || []
  } catch (error) {
    console.error('Error loading reviews:', error)
    return []
  }
}

