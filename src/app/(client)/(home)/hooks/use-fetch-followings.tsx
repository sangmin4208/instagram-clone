import { useEffect, useState } from 'react'

import { ApiEndPoint } from '@/config/api-end-point'
import { FollowingInfo } from '@/types/user'
import { PaginiationLimit } from '@/config/pagination-limit'

import useSWRInfinite from 'swr/infinite'

export const useFetchFollowings = () => {
  const [hasMore, setHasMore] = useState(true)
  const result = useSWRInfinite<FollowingInfo>((index, previousPageData) => {
    if (!hasMore && previousPageData !== null) {
      return null
    }
    return `${ApiEndPoint.fetchMyFollowings({
      page: index,
      limit: PaginiationLimit.followings,
    })}`
  }, fetcher)

  useEffect(() => {
    if (result.data) {
      const hasMore =
        result.data[result.data.length - 1].followings.length ===
        PaginiationLimit.followings
      setHasMore(hasMore)
    }
  }, [result.data])

  return {
    ...result,
    hasMore,
  }
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())
