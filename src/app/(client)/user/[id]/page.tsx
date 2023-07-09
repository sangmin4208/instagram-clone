import { FunctionComponent } from 'react'
import UserPost from '@/components/user-post'
import UserProfile from '@/components/user-profile'
import { getUserProfileById } from '@/services/user/get-user-profile-by-id'

interface PageProps {
  params: {
    id: string
  }
}
export async function generateMetadata({ params: { id } }: PageProps) {
  const user = await getUserProfileById(id)
  return {
    title: `${user.displayName} (@${user.name})`,
    description: `${user.displayName}'s all Instagram posts`,
  }
}

const Page: FunctionComponent<PageProps> = async ({ params: { id } }) => {
  const user = await getUserProfileById(id)
  return (
    <section>
      <UserProfile user={user} />
      <UserPost user={user} />
    </section>
  )
}

export default Page
