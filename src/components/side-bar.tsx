import { UserDetail } from '@/types/user'
import { FunctionComponent } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/ui/avatar'
interface SideBarProps {
  user: UserDetail
}

const SideBar: FunctionComponent<SideBarProps> = async ({
  user: { image, displayName },
}) => {
  return (
    <section className="flex flex-col items-center gap-4">
      <section className="text-center">
        {image && (
          <Avatar className="w-16 h-16">
            <AvatarImage src={image} />
            <AvatarFallback>{displayName}</AvatarFallback>
          </Avatar>
        )}
        <p>
          <strong>{displayName}</strong>
        </p>
      </section>

      <p className="text-xs">{`@Copyright Instagram Clone by Sangmin ${new Date().getFullYear()}`}</p>
    </section>
  )
}

export default SideBar
