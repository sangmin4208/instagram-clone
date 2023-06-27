import NextAuth, { DefaultUser } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import { UserSchema } from '../../types/user'

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
