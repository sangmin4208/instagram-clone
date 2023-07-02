/* eslint-disable @next/next/no-img-element */

import { FunctionComponent } from 'react'
import { PostListItem } from '@/types/post'

interface PostItemCardProps {
  post: PostListItem
}

const PostItemCard: FunctionComponent<PostItemCardProps> = ({ post }) => {
  return (
    <section>
      <figure>
        <img src={post.coverImage} alt={post.title} />
      </figure>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
    </section>
  )
}

export default PostItemCard
