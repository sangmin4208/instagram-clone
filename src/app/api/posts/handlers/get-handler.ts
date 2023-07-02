import 'server-only'

import { getFollowingPostsOf } from '@/services/posts/get-following-posts-of'
import { getServerCurrentUser } from '@/services/user/get-server-current-user'

export const getHandler = async (req: Request): Promise<Response> => {
  const searchParams = new URL(req.url)
  const page = searchParams.searchParams.get('page')
  const limit = searchParams.searchParams.get('limit')
  const session = await getServerCurrentUser()
  if (!session) {
    return new Response('Unauthorized', { status: 401 })
  }
  try {
    const data = await getFollowingPostsOf(session.displayName!)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
}
