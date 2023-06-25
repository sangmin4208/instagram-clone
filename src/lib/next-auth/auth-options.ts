import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

import { nextAuthConfig } from '@/config/next-auth-config'
import { AppPath } from '@/config/app-path'
import { authAdapter } from './auth-adapter'

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
  adapter: authAdapter,
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
