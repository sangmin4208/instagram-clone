/* eslint-disable @next/next/no-img-element */

import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Avatar } from '@/components/ui/avatar'
import CommentForm from '@/app/(client)/(home)/components/comment-form'

import { FunctionComponent } from 'react'
import Icons from '@/components/icons'
import Image from 'next/image'
import { PostListItem } from '@/types/post'

import { cn } from '@/lib/shadcn-ui/utils'
import { timeAgo } from '@/utils/date'

interface PostItemCardProps {
  post: PostListItem
  priority?: boolean
}

const PostItemCard: FunctionComponent<PostItemCardProps> = ({
  post,
  priority,
}) => {
  const { id, text, coverImage, authorImage, author, likes, createdAt } = post
  const likesCount = likes?.length ?? 0
  return (
    <section className="border rounded-md bg-gray-50">
      <PostItemCardAvatar authorImage={authorImage} authorName={author} />

      <PostItemCardCoverImage
        coverImage={coverImage}
        text={text}
        priority={priority}
      />
      <section className="mx-4 my-2">
        <PostItemCardActionBar likesCount={likesCount} />
        <PostItemCardContent
          authorName={author}
          text={text}
          createdAt={createdAt}
        />
        <CommentForm id={id} />
      </section>
    </section>
  )
}

export default PostItemCard

interface PostItemCardAvatarProps {
  authorImage: string
  authorName: string
}

const PostItemCardAvatar: FunctionComponent<PostItemCardAvatarProps> = ({
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

interface PostItemCardActionBarProps {
  likesCount: number
}

const PostItemCardActionBar: FunctionComponent<PostItemCardActionBarProps> = ({
  likesCount,
}) => {
  return (
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
  )
}

interface PostItemCardContentProps {
  authorName: string
  text: string
  createdAt: string
}

const PostItemCardContent: FunctionComponent<PostItemCardContentProps> = ({
  authorName,
  text,
  createdAt,
}) => {
  return (
    <>
      <article className="py-1">
        <p>
          <span className="text-xs font-bold">{authorName}</span> {text}
        </p>
      </article>
      <section>
        <p className="my-2 text-xs uppercase text-neutral-500">
          {timeAgo(createdAt)} by {authorName}
        </p>
      </section>
    </>
  )
}

interface PostItemCardCoverImageProps {
  coverImage: string
  text: string
  priority?: boolean
}

const PostItemCardCoverImage: FunctionComponent<
  PostItemCardCoverImageProps
> = ({ coverImage, text, priority }) => {
  return (
    <figure className="relative aspect-square">
      <Image
        className="object-cover w-full aspect-square"
        src={coverImage}
        alt={text}
        fill
        priority={priority}
      />
    </figure>
  )
}
