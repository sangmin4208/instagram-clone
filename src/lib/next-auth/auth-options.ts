import { Adapter } from 'next-auth/adapters'
import { AppPath } from '@/config/app-path'
import { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import { authAdapter } from './auth-adapter'
import { nextAuthConfig } from '@/config/next-auth-config'

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
      const user = await authAdapter.getUser(token.id as string)
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
  },

  pages: {
    signIn: AppPath.signIn,
  },
} as AuthOptions
