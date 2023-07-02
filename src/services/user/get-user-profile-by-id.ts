import { UserProfile } from '@/types/user'
import { UserSchema } from '@/types/schemas'

import { client } from '@/lib/sanity/client'

export const getUserProfileById = async (id: string): Promise<UserProfile> => {
  const user = (await client.fetch(
    `*[_type == "user" && _id == $id][0]{
      ...,
      "id": _id,
      "following": count(following),
      "followers": count(followers),
      "posts": count(*[_type == "post" && author._ref == ^._id]),
    }`,
    {
      id,
    }
  )) as UserSchema
  if (!user) {
    throw new Error(`User with id ${id} not found`)
  }

  const { _rev, _createdAt, _updatedAt, _type, ...rest } = user

  return {
    ...rest,
    displayName: user.displayName ?? user.name,
    following: user.following ?? 0,
    followers: user.followers ?? 0,
  } as unknown as UserProfile
}
