import { UserProfile } from '@/types/user'
import { UserSchema } from '@/types/schemas'

import { client } from '@/lib/sanity/client'

export const getUserProfileById = async (id: string): Promise<UserProfile> => {
  const user = (await client.fetch(
    `*[_type == "user" && _id == $id][0]{
      ...,
    }`,
    {
      id,
    }
  )) as UserSchema
  if (!user) {
    throw new Error(`User with id ${id} not found`)
  }

  const { _rev, _createdAt, _updatedAt, _type, _id, ...rest } = user

  return {
    ...rest,
    id: _id,
    displayName: user.displayName ?? user.name,
  } as unknown as UserProfile
}
