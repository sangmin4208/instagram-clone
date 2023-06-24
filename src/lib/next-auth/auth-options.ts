import { AuthOptions } from 'next-auth'
import { SanityAdapter } from 'next-auth-sanity'
import { client } from '@lib/sanity/client'
import GoogleProvider from 'next-auth/providers/google'
import { nextAuthConfig } from '@/config/next-auth-config'

const { googleClientId, googleClientSecret } = nextAuthConfig

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: nextAuthConfig.authSecret,
  adapter: SanityAdapter(client),
  callbacks: {
    session({ session, token }) {
      return {
        user: {
          ...session.user,
          id: token.sub,
        },
      }
    },
  },
} as AuthOptions
