import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

import { nextAuthConfig } from '@/config/next-auth-config'
import { AppPath } from '@/config/app-path'
import { authAdapter } from './auth-adapter'
import { Adapter } from 'next-auth/adapters'

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
  adapter: authAdapter as unknown as Adapter,
  callbacks: {
    session: async ({ session, token }) => {
      const user = await authAdapter.getUser(token.sub!)
      if (!user) return session
      return {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          displayName: user.displayName,
        },
      }
    },
  },
  pages: {
    signIn: AppPath.signIn,
  },
} as AuthOptions
