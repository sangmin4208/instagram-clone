import 'server-only'
import { likePost, unlikePost } from '@/services/posts/like-post'
import { authOptions } from '@/lib/next-auth/auth-options'
import { getServerSession } from 'next-auth'

export async function GET(request: Request) {
  return new Response('Not implemented', { status: 501 })
}

export async function POST(request: Request) {
  return new Response('Not implemented', { status: 501 })
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)
  const user = session?.user
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { id, like } = await request.json()
  if (!(id && typeof like === 'boolean')) {
    return new Response('Bad request', { status: 400 })
  }

  const fn = like ? likePost : unlikePost
  try {
    const result = await fn(id, user.id)
    return new Response(JSON.stringify(result), {
      headers: { 'content-type': 'application/json' },
    })
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 })
    }
    return new Response('Internal server error', { status: 500 })
  }
}

export async function PATCH(request: Request) {
  return new Response('Not implemented', { status: 501 })
}

export async function DELETE(request: Request) {
  return new Response('Not implemented', { status: 501 })
}
