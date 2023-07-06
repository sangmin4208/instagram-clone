import { client } from '@/lib/sanity/client'
import { mapPosts } from './map-posts'
import { postListItemProjection } from './post-list-item-projection'

export const getSavedPostsOf = async (displayName: string) => {
  const result = await client.fetch(
    `*[_type == "post" && _id in *[_type=="user" && displayName == $displayName].bookmarks[]._ref] | order(_createdAt desc) {
        ${postListItemProjection}
    }`,
    { displayName }
  )
  return mapPosts(result)
}
