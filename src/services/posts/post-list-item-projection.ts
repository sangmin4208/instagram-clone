export const postListItemProjection = `
coverImage,
title,
"id":_id,
"text": comments[0].content,
"author": author->displayName,
"authorImage": author->image,  
"likes": likes[]->displayName,
"comments": count(comments),
"createdAt": _createdAt,
`
