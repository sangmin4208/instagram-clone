import { UserSchema } from './schemas'

export type UserDetail = Pick<
  UserSchema,
  'displayName' | 'email' | 'image' | 'name' | 'bookmarks'
> & {
  id: string
  following: UserDetail[]
  followers: UserDetail[]
}
