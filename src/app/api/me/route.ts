import 'server-only'

import { NextResponse } from 'next/server'

import { authOptions } from '@/lib/next-auth/auth-options'
import { getServerSession } from 'next-auth'
import { getUserProfileById } from '@/services/user/get-user-profile-by-id'
import { logger } from '@/lib/logger/logger'

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new Response('Unauthorized', { status: 401 })
  }
  try {
    const userDetails = await getUserProfileById(session.user.id)
    return NextResponse.json(userDetails, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      logger.error('🚀 ~ file: route.ts:18 ~ GET ~ getUserFollowingsById:')
      logger.error(error.message)
    }
    return new Response('Internal Server Error', { status: 500 })
  }
}
