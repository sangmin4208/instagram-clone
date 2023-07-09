'use client'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { ApiEndPoint } from '@/config/api-end-point'
import CommentForm from '@/app/(client)/(home)/components/comment-form'
import { FunctionComponent } from 'react'
import Image from 'next/image'
import PostActionBar from './post-action-bar'
import { PostListItem } from '@/types/post'
import PostUserAvatar from '@/components/post-user-avatar'
import Spinner from '@/components/spinner'
import useSWR from 'swr'

interface PostDetailProps {
  post: PostListItem
}

const PostDetail: FunctionComponent<PostDetailProps> = ({ post }) => {
  const { id, coverImage, author, authorImage, createdAt, likes, comments } =
    post
  const likesCount = likes?.length ?? 0

  const { data, isLoading, error } = useSWR(
    ApiEndPoint.fetchPost(id),
    (api: string) => {
      return fetch(api).then((res) => res.json())
    }
  )

  return (
    <section className="flex flex-wrap w-full h-full">
      <div className="relative basis-full md:basis-3/5">
        <Image
          src={coverImage}
          alt={author}
          priority
          fill
          sizes="650px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col w-full p-4 basis-full md:basis-2/5">
        <PostUserAvatar authorName={author} authorImage={authorImage} />
        <ul className="h-full py-2 overflow-y-scroll border-t border-gray-200">
          {isLoading ? (
            <div className="flex items-center justify-center w-full mt-1">
              <Spinner />
            </div>
          ) : (
            data?.comments?.map((comment: any, index: number) => {
              return (
                <li className="flex items-center gap-2 mb-1" key={index}>
                  <Avatar size={'sm'}>
                    <AvatarImage src={comment.image} />
                    <AvatarFallback about={comment.displayName} />
                  </Avatar>
                  <span className="ml-2 text-sm font-semibold">
                    {comment.displayName}
                  </span>
                  <p>{comment.content}</p>
                </li>
              )
            })
          )}
        </ul>
        <PostActionBar post={post} />
        <CommentForm id={id} />
      </div>
    </section>
  )
}

export default PostDetail
