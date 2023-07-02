import { PostListItem } from '@/types/post'

import { client } from '@/lib/sanity/client'
import { urlForImage } from '@/lib/sanity/image'

export const getFollowingPostsOf = async (
  displayName: string
): Promise<PostListItem> => {
  const projection = `
        coverImage,
        title,
        "id":_id,
        "text": comments[0].content,
        "author": author->displayName,
        "authorImage": author->image,  
        "likes": likes[]->displayName,
        "comments": count(comments),
        "createdAt": _createdAt,
    `
  // 자신의 포스트와 자신이 팔로우하는 사람의 포스트를 가져온다. not drift
  const query = `
    *[_type == "post" 
    && (author.displayName == $displayName || 
        author._ref in *[_type == "user" && displayName == $displayName].following[]->._id)] | order(_createdAt desc) {${projection}}
    `

  const results = await client.fetch(query, { displayName })
  const posts = results.map((post: any) => ({
    ...post,
    coverImage: urlForImage(post.coverImage!).width(800).url(),
  }))
  return posts
}
