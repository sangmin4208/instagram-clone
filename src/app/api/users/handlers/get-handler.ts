import 'server-only'
import { searchUsers } from '@/services/user/search-users'

export const getHandler = async (
  req: Request,
  searchTerm?: string
): Promise<Response> => {
  try {
    const data = await searchUsers(searchTerm)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 })
    }
    return new Response('Unknown error', { status: 500 })
  }
}
