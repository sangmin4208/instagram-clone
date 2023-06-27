import { ApiEndPoint } from '@/config/api-end-point'
import { FollowingInfo } from '@/types/user'

import useSWRInfinite from 'swr/infinite'
import { useState } from 'react'

export const useFetchFollowings = () => {
  const [hasMore, setHasMore] = useState(true)
  const result = useSWRInfinite<FollowingInfo>((index, previousPageData) => {
    if (previousPageData && !previousPageData.followings.length) {
      setHasMore(false)
      return null
    }
    return `${ApiEndPoint.fetchMyFollowings({ page: index, limit: 2 })}`
  }, fetcher)

  return {
    ...result,
    hasMore,
  }
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())
