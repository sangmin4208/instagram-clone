import { FunctionComponent } from 'react'
import UserPost from '@/components/user-post'
import UserProfile from '@/components/user-profile'
import { getUserProfileById } from '@/services/user/get-user-profile-by-id'
interface PageProps {
  params: {
    id: string
  }
}

const Page: FunctionComponent<PageProps> = async ({ params: { id } }) => {
  const user = await getUserProfileById(id)
  return (
    <>
      <UserProfile user={user} />
      <UserPost user={user} />
    </>
  )
}

export default Page
