import { UserSchema } from './schemas'

export type UserProfile = Pick<
  UserSchema,
  'displayName' | 'email' | 'image' | 'name' | 'bookmarks'
> & {
  id: string
  following: SimpleUser[]
  followers: SimpleUser[]
  followingCount: number
  followersCount: number
  posts: number
}

export type SimpleUser = Pick<UserProfile, 'id' | 'displayName' | 'image'>

export type FollowingInfo = {
  followings: SimpleUser[]
  totalCount: number
}

export type SearchUser = UserProfile & {
  following: number
  followers: number
}
