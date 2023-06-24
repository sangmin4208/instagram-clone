import { defineField, defineType } from '@sanity-typed/types'

const displayName = defineField({
  title: 'Display Name',
  name: 'displayName',
  type: 'string',
})
const email = defineField({
  title: 'Email',
  name: 'email',
  type: 'string',
})
const name = defineField({
  title: 'Name',
  name: 'name',
  type: 'string',
})

const image = defineField({
  title: 'Image',
  name: 'image',
  type: 'string',
})

const user = defineType({
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [displayName, email, image, name],
})

export default user
