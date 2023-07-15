import { client } from '@/lib/sanity/client'

export async function addBookmark(userId: string, postId: string) {
  return client
    .patch(userId)
    .setIfMissing({ bookmarks: [] })
    .append('bookmarks', [
      {
        _type: 'reference',
        _ref: postId,
      },
    ])
    .commit({ autoGenerateArrayKeys: true })
}

export async function removeBookmark(userId: string, postId: string) {
  return client
    .patch(userId)
    .unset([`bookmarks[_ref=="${postId}"]`])
    .commit()
}
