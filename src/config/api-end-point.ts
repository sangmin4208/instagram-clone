import { PaginationOption } from '@/types/pagination-option'
import { PaginiationLimit } from './pagination-limit'

export const ApiEndPoint = {
  fetchMyFollowings: (option?: PaginationOption) => {
    let { limit = PaginiationLimit.followings, page = 0 } = option ?? {}

    return `/api/me/followings?page=${page}&limit=${limit}`
  },
}
