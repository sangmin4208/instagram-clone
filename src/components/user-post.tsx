'use client'
import { FunctionComponent, useState } from 'react'
import { ApiEndPoint } from '@/config/api-end-point'
import { UserProfile } from '@/types/user'
import useSWR from 'swr'
interface UserPostProps {
  user: UserProfile
}

const UserPost: FunctionComponent<UserPostProps> = ({ user }) => {
  const [tab, setTab] = useState<'posts' | 'liked' | 'bookmarks'>('bookmarks')
  const getApiEndPoint = () => {
    switch (tab) {
      case 'posts':
        return ApiEndPoint.fetchUserPosts(user.displayName!)
      case 'liked':
        return ApiEndPoint.fetchUserLikedPosts(user.displayName!)
      case 'bookmarks':
        return ApiEndPoint.fetchUserBookmarkedPosts(user.displayName!)
      default:
        return ApiEndPoint.fetchUserPosts(user.displayName!)
    }
  }
  const { data: posts } = useSWR(getApiEndPoint(), (url) => {
    return fetch(url).then((res) => res.json())
  })

  return <>{JSON.stringify(posts)}</>
}

export default UserPost
