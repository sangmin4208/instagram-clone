import { UserProfile } from '@/types/user'

import { cache } from 'react'
import { client } from '@/lib/sanity/client'

export const getUserProfileById = cache(
  async (id: string): Promise<UserProfile> => {
    const user = await client.fetch(
      `*[_type == "user" && _id == $id][0]{
      ...,
      "id": _id,
      following[]->{
        "id": _id,
        username,
        image
      },  
      followers[]->{
        "id": _id,
        username,
        image
      },
      "followingCount": count(following),
      "followersCount": count(followers),
      "posts": count(*[_type == "post" && author._ref == ^._id]),
    }`,
      {
        id,
      }
    )
    if (!user) {
      throw new Error(`User with id ${id} not found`)
    }

    const { _rev, _createdAt, _updatedAt, _type, ...rest } = user

    return {
      ...rest,
      displayName: user.displayName ?? user.name,
      followingCount: user.followingCount ?? 0,
      followersCount: user.followersCount ?? 0,
    } as unknown as UserProfile
  }
)
