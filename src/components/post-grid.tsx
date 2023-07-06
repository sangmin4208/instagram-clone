import { ApiEndPoint } from '@/config/api-end-point'
import { FunctionComponent } from 'react'
import PostGridCard from './post-grid-card'
import { PostListItem } from '@/types/post'
import Spinner from './spinner'
import useSWR from 'swr'
interface PostGridProps {
  displayName: string
  query: string
}

const PostGrid: FunctionComponent<PostGridProps> = ({ displayName, query }) => {
  const getApiEndPoint = () => {
    switch (query) {
      case 'posts':
        return ApiEndPoint.fetchUserPosts(displayName)
      case 'liked':
        return ApiEndPoint.fetchUserLikedPosts(displayName)
      case 'bookmarks':
        return ApiEndPoint.fetchUserBookmarkedPosts(displayName)
      default:
        return ApiEndPoint.fetchUserPosts(displayName)
    }
  }
  const { data: posts, isLoading } = useSWR<PostListItem[]>(
    getApiEndPoint(),
    (url) => {
      return fetch(url).then((res) => res.json())
    }
  )
  return (
    <section>
      {isLoading && (
        <div className="flex justify-center py-12">
          <Spinner />
        </div>
      )}

      <ul className="grid grid-cols-3 gap-4">
        {posts?.map((post, index) => (
          <li key={post.id}>
            <PostGridCard post={post} priority={index < 6} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PostGrid
