import config from '@/lib/sanity/config'
import { InferSchemaValues } from '@sanity-typed/types'

type Values = InferSchemaValues<typeof config>

export type UserSchema = Extract<Values, { _type: 'user' }>
export type PostSchema = Extract<Values, { _type: 'post' }>
