import { AuthOptions } from 'next-auth'
import { SanityAdapter } from 'next-auth-sanity'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

import { nextAuthConfig } from '@/config/next-auth-config'
import { client } from '@/lib/sanity/client'
import { AppPath } from '@/config/app-path'

const {
  googleClientId,
  googleClientSecret,
  githubClientId,
  githubClientSecret,
} = nextAuthConfig

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    GithubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
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
  pages: {
    signIn: AppPath.signIn,
  },
} as AuthOptions
