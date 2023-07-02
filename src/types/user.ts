import { UserSchema } from './schemas'

export type UserProfile = Pick<
  UserSchema,
  'displayName' | 'email' | 'image' | 'name' | 'bookmarks'
> & {
  id: string
  following: number
  followers: number
  posts: number
}

export type FollowingUser = Pick<UserProfile, 'id' | 'displayName' | 'image'>

export type FollowingInfo = {
  followings: FollowingUser[]
  totalCount: number
}

export type SearchUser = UserProfile & {
  following: number
  followers: number
}
