import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
import { FunctionComponent } from 'react'
import { SimpleUser } from '@/types/user'
interface FollowingListItemProps {
  following: SimpleUser
}

const FollowingListItem: FunctionComponent<FollowingListItemProps> = ({
  following,
}) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-1">
        <Avatar className="w-16 h-16">
          <AvatarImage src={following.image} />
          <AvatarFallback>{following.displayName}</AvatarFallback>
        </Avatar>
        <h3 className="text-xs font-medium text-gray-600">
          {following.displayName}
        </h3>
      </div>
    </section>
  )
}

// Skeleton

export default FollowingListItem
