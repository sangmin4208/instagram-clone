import { client } from '@/lib/sanity/client'
import { mapPosts } from './map-posts'
import { postListItemProjection } from './post-list-item-projection'

export const getLikedOf = async (displayName: string) => {
  const result = await client.fetch(
    `*[_type == "post" && $displayName in likes[]->displayName] | order(_createdAt desc) {
        ${postListItemProjection}
    }`,
    { displayName }
  )
  return mapPosts(result)
}
