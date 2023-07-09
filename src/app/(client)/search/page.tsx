import { FunctionComponent } from 'react'
import { Metadata } from 'next'
import UserSearch from '@/components/user-search'
interface PageProps {}

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'User Search',
  description: 'Search for users to follow',
}

const Page: FunctionComponent<PageProps> = () => {
  return <UserSearch />
}

export default Page
