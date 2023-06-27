import { UserSchema } from './schemas'

export type UserProfile = Pick<
  UserSchema,
  'displayName' | 'email' | 'image' | 'name' | 'bookmarks'
> & {
  id: string
}

export type SimpleUserProfile = Pick<
  UserProfile,
  'id' | 'displayName' | 'image'
>

export type FollowingInfo = {
  followings: SimpleUserProfile[]
  totalCount: number
}
