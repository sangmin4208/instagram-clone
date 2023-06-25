import { SanityAdapter } from 'next-auth-sanity'
import { Adapter, AdapterUser } from 'next-auth/adapters'
import { client } from '../sanity/client'
import { randomUUID } from 'crypto'

const sanityAdapter = SanityAdapter(client)

export const authAdapter = {
  ...sanityAdapter,
  createUser: async (user) => {
    const id = `user.${randomUUID()}`
    const data = await client.createIfNotExists({
      _id: id,
      _type: 'user',
      name: user.name,
      displayName: user.name,
      email: user.email,
      image: user.image,
    })
    return {
      id: data._id,
      email: data.email,
      emailVerified: user.emailVerified,
    }
  },
} as Adapter
