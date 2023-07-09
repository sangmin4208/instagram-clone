import 'server-only'
import { urlForImage } from '@/lib/sanity/image'

export function mapPosts(posts: any) {
  return posts.map((post: any) => ({
    ...post,
    likes: post.likes ?? [],
    coverImage: urlForImage(post.coverImage).width(800).url(),
  }))
}
