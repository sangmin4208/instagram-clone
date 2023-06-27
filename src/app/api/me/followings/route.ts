import 'server-only'

import { NextResponse } from 'next/server'

import { authOptions } from '@/lib/next-auth/auth-options'
import { getServerSession } from 'next-auth'
import { getUserFollowingsById } from '@/services/user/get-user-followings-by-id'
import { logger } from '@/lib/logger/logger'

export async function GET(request: Request) {
  const searchParams = new URL(request.url)
  const page = searchParams.searchParams.get('page')
  const limit = searchParams.searchParams.get('limit')
  const session = await getServerSession(authOptions)
  if (!session) {
    return new Response('Unauthorized', { status: 401 })
  }
  try {
    const userDetails = await getUserFollowingsById(session.user.id, {
      page: Number(page),
      limit: Number(limit),
    })
    return NextResponse.json(userDetails, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      logger.error(
        '🚀 ~ file: route.ts:18 ~ GET ~ getUserFollowingsById:',
        getUserFollowingsById
      )
      logger.error(error.message)
    }
    return new Response('Internal Server Error', { status: 500 })
  }
}
