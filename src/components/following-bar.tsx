import { UserDetail } from '@/types/user'
import { FunctionComponent } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
interface FollowingBarProps {
  following: UserDetail['following']
}

const FollowingBar: FunctionComponent<FollowingBarProps> = ({ following }) => {
  return (
    <section>
      {following.slice(0, 10).map((user) => (
        <div className="flex flex-col justify-center gap-1" key={user.id}>
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.image} />
            <AvatarFallback>{user.displayName}</AvatarFallback>
          </Avatar>
          <h3>{user.displayName}</h3>
        </div>
      ))}
    </section>
  )
}

export default FollowingBar
