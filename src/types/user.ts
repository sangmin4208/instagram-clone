import { UserSchema } from './schemas'

export type UserDetail = Pick<
  UserSchema,
  'displayName' | 'email' | 'image' | 'name' | '_id'
>
