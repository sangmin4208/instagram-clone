import { PaginationOption } from '@/types/pagination-option'
import { PaginiationLimit } from './pagination-limit'

export const ApiEndPoint = {
  fetchMe: () => {
    return `/api/me`
  },
  fetchMyFollowings: (option?: PaginationOption) => {
    let { limit = PaginiationLimit.followings, page = 0 } = option ?? {}

    return `/api/me/followings?page=${page}&limit=${limit}`
  },
  fetchPosts: (option?: PaginationOption) => {
    // let { limit = PaginiationLimit.posts, page = 0 } = option ?? {}

    // return `/api/posts?page=${page}&limit=${limit}`
    return `/api/posts`
  },

  fetchPost: (id: string) => {
    return `/api/posts/${id}`
  },

  fetchUsers: (searchTerm?: string, option?: PaginationOption) => {
    let { limit = PaginiationLimit.users, page = 0 } = option ?? {}

    return `/api/users?page=${page}&limit=${limit}&searchTerm=${searchTerm}`
  },
}
