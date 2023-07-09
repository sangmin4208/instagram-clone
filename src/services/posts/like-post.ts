import { client } from '@/lib/sanity/client'

export async function likePost(postId: string, userId: string) {
  return client
    .patch(postId)
    .setIfMissing({ likes: [] })
    .append('likes', [
      {
        _type: 'reference',
        _ref: userId,
      },
    ])
    .commit({ autoGenerateArrayKeys: true })
}

export async function unlikePost(postId: string, userId: string) {
  return client
    .patch(postId)
    .unset([`likes[_ref=="${userId}"]`])
    .commit()
}
