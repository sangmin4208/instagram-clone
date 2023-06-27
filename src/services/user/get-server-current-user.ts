import 'server-only'

import { UserProfile } from '@/types/user'

import { authOptions } from '@/lib/next-auth/auth-options'
import { cache } from 'react'
import { getServerSession } from 'next-auth'
import { getUserProfileById } from '@/services/user/get-user-profile-by-id'

export const getServerCurrentUser = cache(
  async (): Promise<UserProfile | null> => {
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id
    if (!userId) {
      return null
    }

    const user = await getUserProfileById(userId)
    return user
  }
)
