import NextAuth, { DefaultUser } from 'next-auth'
import { UserSchema } from '../../types/user'
import { AdapterUser } from 'next-auth/adapters'

declare module 'next-auth' {
  interface Session {
    user: AdapterUser
  }
}

declare module 'next-auth/adapters' {
  interface AdapterUser {
    id: string
    name: string
    email: string
    image: string
    displayName: string
  }
}
