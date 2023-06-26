import { SanityAdapter } from 'next-auth-sanity'
import { client } from '../sanity/client'
import { randomUUID } from 'crypto'
import { AdapterUser } from 'next-auth/adapters'

const sanityAdapter = SanityAdapter(client)

export const authAdapter = {
  ...sanityAdapter,
  createUser: async (user: AdapterUser) => {
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
      displayName: data.displayName,
      emailVerified: user.emailVerified,
    }
  },
}
