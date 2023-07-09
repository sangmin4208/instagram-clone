'use client'
import { FunctionComponent } from 'react'
import PostItemCard from '@/components/post-item-card'
import PostItemCardSkeleton from '@/components/post-item-card-skeleton'
import { usePosts } from '@/hooks/use-posts'
interface PostListProps {}

const PostList: FunctionComponent<PostListProps> = () => {
  const { posts, isLoading, error } = usePosts()

  return (
    <section className="mt-8 md:mt-12">
      <section className="grid grid-cols-1 gap-2">
        {isLoading &&
          Array.from({ length: 8 }).map((_, index) => {
            return <PostItemCardSkeleton key={index} />
          })}
        {posts &&
          posts.map((post, index) => {
            return (
              <PostItemCard key={post.id} post={post} priority={index < 2} />
            )
          })}
      </section>
    </section>
  )
}

export default PostList
