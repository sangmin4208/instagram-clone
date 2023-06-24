import { defineField, defineType } from '@sanity-typed/types'

const title = defineField({
  title: 'Name',
  name: 'name',
  type: 'string',
})

const coverImage = defineField({
  title: 'Cover Image',
  name: 'coverImage',
  type: 'image',
  options: {
    hotspot: true,
  },
})

const content = defineField({
  title: 'Content',
  name: 'content',
  type: 'text',
})

const post = defineType({
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [title, coverImage, content],
})

export default post
