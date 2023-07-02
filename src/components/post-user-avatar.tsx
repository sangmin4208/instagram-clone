import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FunctionComponent } from 'react'
import { cn } from '@/lib/shadcn-ui/utils'

interface PostUserAvatarProps {
  authorImage: string
  authorName: string
}

const PostUserAvatar: FunctionComponent<PostUserAvatarProps> = ({
  authorImage,
  authorName,
}) => {
  return (
    <section className={cn('flex items-center gap-3 p-3')}>
      <Avatar variant={'ring'} size={'default'}>
        <AvatarImage className="object-cover w-full" src={authorImage} />
        <AvatarFallback>{authorName}</AvatarFallback>
      </Avatar>
      <p className={cn('text-gray-900 font-bold text-sm')}>{authorName}</p>
    </section>
  )
}

export default PostUserAvatar
