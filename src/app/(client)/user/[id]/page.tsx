import { FunctionComponent } from 'react'
import { getUserProfileById } from '@/services/user/get-user-profile-by-id'
interface PageProps {
  params: {
    id: string
  }
}

const Page: FunctionComponent<PageProps> = async ({ params: { id } }) => {
  const user = await getUserProfileById(id)
  return <>{JSON.stringify(user)}</>
}

export default Page
