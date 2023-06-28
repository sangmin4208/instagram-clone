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

    const info = await client.fetch(
      `*[_type == "user" && _id == $id][0]{
      'followings': following[$start..$end]->{
        'id':_id,
        displayName,
        image,
      },
      'totalCount': count(following),
    }`,
      { id, start, end }
    )
    return {
      followings: info.followings ?? [],
      totalCount: info.totalCount ?? 0,
    }
  }
)
