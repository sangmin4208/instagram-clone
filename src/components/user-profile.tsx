import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import FollowButton from '@/components/follow-button'
import { FunctionComponent } from 'react'
import { UserProfile as UserProfileType } from '@/types/user'
import { getUserProfileById } from '@/services/user/get-user-profile-by-id'
interface UserProfileProps {
  user: UserProfileType
}

const UserProfile: FunctionComponent<UserProfileProps> = ({ user }) => {
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
    <section className="flex flex-col items-center justify-center w-full gap-2 py-12 border-b md:flex-row border-neutral-300">
      <Avatar size={'xl'}>
        <AvatarImage src={user.image} />
        <AvatarFallback about={user.displayName} />
      </Avatar>
      <section className="md:ml-10 basis-1/3">
        <section className="flex flex-col items-center md:flex-row">
          <h1 className="text-2xl md:mr-8 md:mb-0">{user.displayName}</h1>
          <FollowButton user={user} />
        </section>

        <ul className="flex gap-4 my-4">
          {info.map((item) => (
            <li key={item.title}>
              <span>{item.title}</span>
              <p>{item.data}</p>
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold text-center md:text-start">
          {user.name}
        </p>
      </section>
    </section>
  )
}

export default UserProfile
