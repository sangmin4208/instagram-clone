import 'server-only'
import { authOptions } from '@/lib/next-auth/auth-options'
import { getServerSession } from 'next-auth'
import { UserDetail } from '@/types/user'
import { getUserById } from './get-user-by-id'
import { cache } from 'react'

export const getServerCurrentUser = cache(
  async (): Promise<UserDetail | null> => {
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id
    if (!userId) {
      return null
    }

    const user = await getUserById(userId)
    return user
  }
)
