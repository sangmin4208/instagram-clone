import { client } from '@/lib/sanity/client'

export async function getPost(id: string) {
  const query = `
        *[_type == "post" && _id == $id][0] {
            ...,
            "authorName": author->displayName,
            "authorImage": author->image,
            "likes": likes[]->displayName,
            "comments":comments[]{
                content,
                "displayName": author->displayName,
                "image": author->image
            },
            "id": _id,
            "commentCount": count(comments),
        }
    `

  return client.fetch(query, { id })
}
