import { PostSchema } from './schemas'

export type PostListItem = {
  id: PostSchema['_id']
  title: PostSchema['title']
  createdAt: PostSchema['_createdAt']
  coverImage: string
  text: string
  likes: string[]
  comments: number
}
