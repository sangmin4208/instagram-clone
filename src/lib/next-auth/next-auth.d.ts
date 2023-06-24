import NextAuth, { DefaultUser } from 'next-auth'
import { UserSchema } from '../../types/user'

declare module 'next-auth' {
  interface Session {
    user: DefaultUser
  }
}
