'use client'
import { FunctionComponent, useState } from 'react'
import Icons from '@/components/icons'
import { PostListItem } from '@/types/post'
import ToggleButton from '@/components/toggle-button'
import { cn } from '@/lib/shadcn-ui/utils'
import { usePosts } from '@/hooks/use-posts'
import { useSession } from 'next-auth/react'
interface PostActionBarProps {
  post: PostListItem
}

const PostActionBar: FunctionComponent<PostActionBarProps> = ({ post }) => {
  const { likes } = post
  const { data: session } = useSession()
  const likesCount = likes?.length ?? 0
  const liked =
    likes?.some((like) => like === session?.user?.displayName) ?? false
  const [bookmarked, setBookmarked] = useState(false)
  const { setLike } = usePosts()
  const handleLike = (like: boolean) => {
    setLike(post, session?.user?.displayName ?? '', like)
  }

  return (
    <>
      <section className="flex items-start justify-between">
        <section className="flex flex-col items-center">
          <ToggleButton
            toggled={liked}
            onToggle={handleLike}
            onIcon={<Icons.Heart size={18} stroke="red" fill="red" />}
            offIcon={<Icons.Heart size={18} />}
          />

          <p className={cn('text-xs')}>{`${likesCount} ${
            likesCount > 1 ? 'likes' : 'like'
          }`}</p>
        </section>
        <section className="flex flex-col items-center">
          <ToggleButton
            toggled={bookmarked}
            onToggle={() => setBookmarked(!bookmarked)}
            onIcon={<Icons.Bookmark size={18} stroke="red" fill="red" />}
            offIcon={<Icons.Bookmark size={18} />}
          />
        </section>
      </section>
    </>
  )
}

export default PostActionBar
