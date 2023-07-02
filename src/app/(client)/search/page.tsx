import { FunctionComponent } from 'react'
import UserSearch from '@/components/user-search'
interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <>
      <UserSearch />
    </>
  )
}

export default Page
