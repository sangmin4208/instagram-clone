import { FunctionComponent } from 'react'
import SignInPage from './sign-in-page'
interface PageProps {
  searchParams?: {
    error?: string
  }
}

const Page: FunctionComponent<PageProps> = ({
  searchParams: { error } = {},
}) => {
  return (
    <main className="container flex items-center min-h-screen">
      <SignInPage error={error} />
    </main>
  )
}

export default Page
