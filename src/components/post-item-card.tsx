'use client'

import { FunctionComponent, useState } from 'react'
import CommentForm from '@/app/(client)/(home)/components/comment-form'

import Image from 'next/image'
import ModalPortal from './ui/modal-portal'
import PostActionBar from '@/components/post-action-bar'
import PostDetail from './post-detail'
import { PostListItem } from '@/types/post'
import PostModal from './post-modal'
import PostUserAvatar from './post-user-avatar'

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
  const [openModal, setOpenModal] = useState(false)
  return (
    <section className="border rounded-md bg-gray-50">
      {openModal && (
        <ModalPortal>
          <PostModal
            onClose={() => {
              setOpenModal((prev) => {
                return false
              })
            }}
          >
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}

      <PostUserAvatar authorImage={authorImage} authorName={author} />
      <section className="cursor-pointer" onClick={() => setOpenModal(true)}>
        <PostItemCardCoverImage
          coverImage={coverImage}
          text={text}
          priority={priority}
        />
      </section>

      <section className="mx-4 my-2">
        <PostActionBar post={post} />
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
