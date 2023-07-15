import useSWR, { useSWRConfig } from 'swr'
import { ApiEndPoint } from '@/config/api-end-point'
import { PostListItem } from '@/types/post'

export const usePosts = () => {
  const {
    data: posts,
    isLoading,
    error,
    mutate,
  } = useSWR<PostListItem[]>(ApiEndPoint.fetchPosts(), fetchPosts)
  const setLike = async (
    post: PostListItem,
    username: string,
    like: boolean
  ) => {
    const { id } = post
    const newPost = {
      ...post,
      likes: like
        ? [...(post.likes ?? []), username]
        : post.likes?.filter((like) => like !== username),
    }
    const newPosts = posts?.map((post) => (post.id === id ? newPost : post))
    return mutate(updateLike(ApiEndPoint.likePost(), id, like), {
      optimisticData: newPosts,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    })
  }

  return { posts, isLoading, error, setLike }
}

const fetchPosts = (url: string) => fetch(url).then((res) => res.json())
const updateLike = (url: string, id: string, like: boolean) => {
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify({ id, like }),
  }).then((res) => res.json())
}
