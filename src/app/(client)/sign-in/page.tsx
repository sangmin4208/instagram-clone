import { FunctionComponent } from 'react'
import { Metadata } from 'next'
import SignInPage from './sign-in-page'
import { getServerCurrentUser } from '@/services/user/get-server-current-user'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to Instagram clone',
}

interface PageProps {
  searchParams?: {
    error?: string
  }
}

const Page: FunctionComponent<PageProps> = async ({
  searchParams: { error } = {},
}) => {
  const user = await getServerCurrentUser()
  if (user) {
    redirect('/')
  }

  return (
    <main className="container flex items-center min-h-screen">
      <SignInPage error={error} />
    </main>
  )
}

export default Page
