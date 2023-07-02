'use client'
import { ApiEndPoint } from '@/config/api-end-point'
import { Button } from '@/components/ui/button'
import { FunctionComponent } from 'react'
import { UserProfile } from '@/types/user'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
interface FollowButtonProps {
  user: UserProfile
}

const FollowButton: FunctionComponent<FollowButtonProps> = ({ user }) => {
  const { data: session } = useSession()
  const { data: me } = useSWR<UserProfile>(ApiEndPoint.fetchMe(), (url) => {
    return fetch(url).then((res) => res.json())
  })
  const showButton = session?.user?.id !== user.id
  const isFollowing = me?.following?.some(
    (following) => following.id === user.id
  )

  if (!showButton) return null
  return (
    <div>
      {isFollowing ? (
        <Button variant={'secondary'}>Unfollow</Button>
      ) : (
        <Button variant={'outline'} color="secondary">
          Follow
        </Button>
      )}
    </div>
  )
}

export default FollowButton
