import { FollowingInfo } from '@/types/user'
import { PaginationOption } from '@/types/pagination-option'
import { PaginiationLimit } from '@/config/pagination-limit'

import { cache } from 'react'
import { client } from '@/lib/sanity/client'

export const getUserFollowingsById = cache(
  async (id: string, options?: PaginationOption): Promise<FollowingInfo> => {
    const { limit = PaginiationLimit.followings, page = 1 } = options ?? {}
    const start = page === 0 ? 0 : page * limit
    const end = start + limit - 1

    const user = await client.fetch(
      `*[_type == "user" && _id == $id][0]{
      'followings': following[$start..$end]->{
        _id,
        displayName,
        image,
      },
      'count': count(following[$start..$end]),
      'totalCount': count(following),
    }`,
      { id, start, end }
    )
    return user
  }
)
