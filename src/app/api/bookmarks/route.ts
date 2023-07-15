import 'server-only'
import { addBookmark, removeBookmark } from '@/services/user/add-book-mark'
import { authOptions } from '@/lib/next-auth/auth-options'
import { getServerSession } from 'next-auth'

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)
  const user = session?.user
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { id, bookmark } = await request.json()
  if (!(id && typeof bookmark === 'boolean')) {
    return new Response('Bad request', { status: 400 })
  }

  const fn = bookmark ? addBookmark : removeBookmark
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
