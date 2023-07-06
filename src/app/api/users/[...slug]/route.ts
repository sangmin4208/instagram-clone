import 'server-only'
import { NextResponse } from 'next/server'
import { getLikedOf } from '@/services/posts/get-liked-of'
import { getPostsOf } from '@/services/posts/get-posts-of'
import { getSavedPostsOf } from '@/services/posts/get-saved-posts-of'
import { logger } from '@/lib/logger/logger'

interface Context {
  params: { slug: string[] }
}

export async function GET(request: Request, context: Context) {
  const { slug } = context.params
  if (!slug || !Array.isArray(slug) || slug.length < 2) {
    return new NextResponse('Bad Request', { status: 400 })
  }

  const [displayName, query] = slug
  let req = getPostsOf
  if (query === 'bookmarked') {
    req = getSavedPostsOf
  } else if (query === 'liked') {
    req = getLikedOf
  }
  try {
    const posts = await req(displayName)
    return new Response(JSON.stringify(posts), {
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    })
  } catch (error) {
    logger.error(error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(request: Request) {
  return new Response('Not implemented', { status: 501 })
}

export async function PUT(request: Request) {
  return new Response('Not implemented', { status: 501 })
}

export async function PATCH(request: Request) {
  return new Response('Not implemented', { status: 501 })
}

export async function DELETE(request: Request) {
  return new Response('Not implemented', { status: 501 })
}
