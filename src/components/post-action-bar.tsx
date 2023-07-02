import { FunctionComponent } from 'react'
import Icons from '@/components/icons'
import { cn } from '@/lib/shadcn-ui/utils'
interface PostActionBarProps {
  likesCount: number
}

const PostActionBar: FunctionComponent<PostActionBarProps> = ({
  likesCount,
}) => {
  return (
    <>
      <section className="flex items-start justify-between">
        <section className="flex flex-col items-center">
          <Icons.Heart size={18} />
          <p className={cn('text-xs')}>{`${likesCount} ${
            likesCount > 1 ? 'likes' : 'like'
          }`}</p>
        </section>
        <section className="flex flex-col items-center">
          <Icons.BookMarked size={18} />
        </section>
      </section>
    </>
  )
}

export default PostActionBar
