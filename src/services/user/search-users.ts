import { UserSearchResult } from '@/types/user'
import { client } from '@/lib/sanity/client'

export async function searchUsers(searchTerm?: string) {
  let searchTermQuery = ``
  if (searchTerm) {
    searchTermQuery = `&& displayName match $searchTerm || username match $searchTerm`
  } else {
    searchTermQuery = ``
  }

  let query = `
    *[_type == "user" ${searchTermQuery}] {
        ...,
        "id": _id,
        "following": count(following),
        "followers": count(followers),
    }
  `
  const data = await client.fetch(
    query,
    searchTerm ? { searchTerm: `*${searchTerm}*` } : undefined
  )

  return data.map((user: UserSearchResult) => {
    return {
      ...user,
      following: user.following ?? 0,
      followers: user.followers ?? 0,
    }
  })
}
