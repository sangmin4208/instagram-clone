import { defineArrayMember, defineField, defineType } from '@sanity-typed/types'

const post = defineType({
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: '포스트의 제목입니다.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'user' }],
      description: '포스트의 작성자입니다.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Cover Image',
      name: 'coverImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: '포스트의 커버 이미지입니다.',
    }),

    defineField({
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'user' }],
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'document',
          fields: [
            defineField({
              title: 'Author',
              name: 'author',
              type: 'reference',
              to: [{ type: 'user' }],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              title: 'Content',
              name: 'content',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'author.name',
              subtitle: 'content',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
      media: 'coverImage',
    },
    prepare(selection) {
      return {
        ...selection,
        subtitle: selection.subtitle && `by ${selection.subtitle}`,
      }
    },
  },
})

export default post
