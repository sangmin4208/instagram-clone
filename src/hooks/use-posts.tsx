import useSWR, { useSWRConfig } from 'swr'
import { ApiEndPoint } from '@/config/api-end-point'
import { PostListItem } from '@/types/post'

export const usePosts = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR<PostListItem[]>(ApiEndPoint.fetchPosts(), fetcher)
  const { mutate } = useSWRConfig()
  const setLike = async (id: string, like: boolean) => {
    const res = await fetch(ApiEndPoint.likePost(), {
      method: 'PUT',
      body: JSON.stringify({ id, like }),
    })
    if (res.ok) {
      mutate(ApiEndPoint.fetchPosts())
    }
  }

  return { posts, isLoading, error, setLike }
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())
