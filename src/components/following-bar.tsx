import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
import { FunctionComponent } from 'react'
import { SimpleUserProfile } from '@/types/user'
interface FollowingListItemProps {
  following: SimpleUserProfile
}

const FollowingListItem: FunctionComponent<FollowingListItemProps> = ({
  following,
}) => {
  return (
    <section>
      <div className="flex flex-col justify-center gap-1">
        <Avatar className="w-16 h-16">
          <AvatarImage src={following.image} />
          <AvatarFallback>{following.displayName}</AvatarFallback>
        </Avatar>
        <h3>{following.displayName}</h3>
      </div>
    </section>
  )
}

export default FollowingListItem
