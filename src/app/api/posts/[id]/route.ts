import 'server-only'
import { getHandler } from './handlers/get-handler'
interface Params {
  id: string
}
interface Context {
  params: Params
}

export async function GET(request: Request, context: Context) {
  const id = context.params.id
  return getHandler(request, id)
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
