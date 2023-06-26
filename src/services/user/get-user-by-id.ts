import { client } from '@/lib/sanity/client'
import { UserSchema } from '@/types/schemas'
import { UserDetail } from '@/types/user'

export const getUserById = async (id: string): Promise<UserDetail> => {
  const user = (await client.fetch(`*[_type == "user" && _id == $id][0]`, {
    id,
  })) as UserSchema
  if (!user) {
    throw new Error(`User with id ${id} not found`)
  }

  const { _rev, _createdAt, _updatedAt, _type, _id, ...rest } = user

  return {
    ...rest,
    id: _id,
    displayName: user.displayName ?? user.name,
  }
}
