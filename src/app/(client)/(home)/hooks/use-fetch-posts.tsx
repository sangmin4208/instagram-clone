import { ApiEndPoint } from '@/config/api-end-point'
import { PostListItem } from '@/types/post'
import useSWR from 'swr'

export const useFetchPosts = () => {
  return useSWR<PostListItem[]>(ApiEndPoint.fetchPosts(), async () => {
    const res = await fetch(ApiEndPoint.fetchPosts())
    const data = await res.json()
    return data
  })
}
