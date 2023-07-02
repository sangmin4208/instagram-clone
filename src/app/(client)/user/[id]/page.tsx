import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import FollowButton from '@/components/follow-button'
import { FunctionComponent } from 'react'
import { getUserProfileById } from '@/services/user/get-user-profile-by-id'
interface PageProps {
  params: {
    id: string
  }
}

const Page: FunctionComponent<PageProps> = async ({ params: { id } }) => {
  const user = await getUserProfileById(id)
  console.log(user)
  const info = [
    {
      title: 'posts',
      data: user.posts,
    },
    {
      title: 'followers',
      data: user.followersCount,
    },
    {
      title: 'following',
      data: user.followingCount,
    },
  ]
  return (
    <section>
      <Avatar>
        <AvatarImage src={user.image} />
        <AvatarFallback about={user.displayName} />
      </Avatar>
      <section>
        <h1>{user.displayName}</h1>
        <FollowButton user={user} />
        <ul>
          {info.map((item) => (
            <li key={item.title}>
              <span>{item.title}</span>
              <p>{item.data}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Page
