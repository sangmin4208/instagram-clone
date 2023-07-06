'use client'
import { FunctionComponent, useState } from 'react'
import Icons from '@/components/icons'
import PostGrid from '@/components/post-grid'
import { UserProfile } from '@/types/user'
import { cn } from '@/lib/shadcn-ui/utils'
interface UserPostProps {
  user: UserProfile
}

const tabs = [
  { type: 'posts', icon: Icons.Grid },
  { type: 'bookmarks', icon: Icons.BookMarked },
  { type: 'liked', icon: Icons.Heart },
] as {
  type: TabType
  icon: FunctionComponent
}[]

type TabType = 'liked' | 'bookmarks' | 'posts'

const UserPost: FunctionComponent<UserPostProps> = ({ user }) => {
  const [currentTab, setCurrentTab] = useState<TabType>('bookmarks')

  return (
    <section>
      <ul className="flex justify-center uppercase">
        {tabs.map((tab) => (
          <li
            className={cn('flex gap-2 p-4 mx-12  border-black cursor-pointer', {
              'border-t-2': currentTab === tab.type,
            })}
            key={tab.type}
            onClick={() => setCurrentTab(tab.type)}
          >
            <span className="scale-120 md:scale-100">
              <tab.icon />
            </span>
            <span className="hidden md:inline">{tab.type}</span>
          </li>
        ))}
      </ul>
      <PostGrid displayName={user.displayName!} query={currentTab} />
    </section>
  )
}

export default UserPost
