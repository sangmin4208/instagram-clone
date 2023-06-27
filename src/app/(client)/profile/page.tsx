import { FunctionComponent } from 'react'

import { getServerCurrentUser } from '@/services/user/get-server-current-user'
import { redirect } from 'next/navigation'
interface PageProps {}

const Page: FunctionComponent<PageProps> = async ({}) => {
  const user = await getServerCurrentUser()
  if (user === null) {
    await redirect('/')
  }
  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

export default Page
