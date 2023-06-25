import { defineField, defineType, defineArrayMember } from '@sanity-typed/types'

const user = defineType({
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    defineField({
      title: 'Display Name',
      name: 'displayName',
      type: 'string',
      description: '유저가 설정한 이름입니다. (기본값: Name)',
    }),
    defineField({
      title: 'Email',
      name: 'email',
      type: 'string',
      description: 'Provider로 부터 제공받은 이메일 주소입니다.',
    }),
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Provider로 부터 제공받은 이름입니다.',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'string',
      description: 'Provider로 부터 제공받은 프로필 이미지 URL입니다.',
    }),
    defineField({
      title: 'Following',
      name: 'following',
      description: '팔로잉 중인 유저들의 목록입니다.',
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
      title: 'Followers',
      name: 'followers',
      description: '팔로워들의 목록입니다.',
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
      title: 'Bookmarks',
      name: 'bookmarks',
      description: '북마크한 포스트들의 목록입니다.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'post' }],
        }),
      ],
    }),
  ],
})

export default user
