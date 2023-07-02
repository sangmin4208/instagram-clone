import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AppPath } from '@/config/app-path'
import { FunctionComponent } from 'react'
import Link from 'next/link'
import { SearchUser } from '@/types/user'
import { cn } from '@/lib/shadcn-ui/utils'
interface UserSearchItemProps {
  user: SearchUser
}

const UserSearchItem: FunctionComponent<UserSearchItemProps> = ({ user }) => {
  const { displayName, id, followers, following, image, name } = user
  return (
    <Link
      className={cn(
        'flex items-center w-full gap-4 p-4 border rounded',
        'hover:bg-gray-100',
        'duration-200'
      )}
      href={AppPath.userDetail(id)}
    >
      <Avatar size={'xl'}>
        <AvatarImage src={image} />
        <AvatarFallback about={displayName} />
      </Avatar>
      <div className="flex flex-col text-neutral-500">
        <div className="flex items-center gap-1">
          <p className="font-bold text-black">{name}</p>
          <p className="text-xs">({displayName})</p>
        </div>
        <div className="flex flex-row gap-2 text-sm">
          <div>{followers} followers</div>
          <div>{following} following</div>
        </div>
      </div>
    </Link>
  )
}

export default UserSearchItem
