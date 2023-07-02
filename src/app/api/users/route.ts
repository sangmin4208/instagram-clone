import 'server-only'
import { getHandler } from './handlers/get-handler'

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams
  const searchTerm = searchParams.get('searchTerm') || undefined
  return getHandler(request, searchTerm)
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
