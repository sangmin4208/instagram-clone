import { PostListItem } from '@/types/post'

import { client } from '@/lib/sanity/client'
import { mapPosts } from './map-posts'
import { postListItemProjection } from './post-list-item-projection'

export const getFollowingPostsOf = async (
  displayName: string
): Promise<PostListItem> => {
  // 자신의 포스트와 자신이 팔로우하는 사람의 포스트를 가져온다. not drift
  const query = `
    *[_type == "post" 
    && (author.displayName == $displayName || 
        author._ref in *[_type == "user" && displayName == $displayName].following[]->._id)] | order(_createdAt desc) {${postListItemProjection}}
    `

  const results = await client.fetch(query, { displayName })

  return mapPosts(results)
}
