import { PostSchema } from './schemas'

export type PostListItem = {
  id: PostSchema['_id']
  title: PostSchema['title']
  createdAt: PostSchema['_createdAt']
  author: string
  coverImage: string
  authorImage: string
  text: string
  likes?: string[]
  comments: number
}
