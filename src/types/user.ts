import { UserSchema } from './schemas'

export type UserDetail = Pick<
  UserSchema,
  | 'displayName'
  | 'email'
  | 'image'
  | 'name'
  | 'following'
  | 'followers'
  | 'bookmarks'
> & {
  id: string
}
