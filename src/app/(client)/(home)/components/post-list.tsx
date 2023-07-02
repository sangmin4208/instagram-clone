'use client'
import { FunctionComponent } from 'react'
import PostItemCard from './post-item-card'
import { useFetchPosts } from '../hooks/use-fetch-posts'
interface PostListProps {}

const PostList: FunctionComponent<PostListProps> = () => {
  const { data, isLoading, error } = useFetchPosts()
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {data &&
        data.map((post: any) => {
          return <PostItemCard key={post._id} post={post} />
        })}
    </>
  )
}

export default PostList
