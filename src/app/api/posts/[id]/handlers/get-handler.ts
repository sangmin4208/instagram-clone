import 'server-only'
import { getPost } from '@/services/posts/get-post'

export const getHandler = async (
  req: Request,
  id: string
): Promise<Response> => {
  try {
    const data = await getPost(id)
    console.log(data)

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
}
