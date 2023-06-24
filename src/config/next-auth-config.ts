import { assertValue } from '@/utils/assert-value'

const googleClientId = assertValue(
  process.env.GOOGLE_CLIENT_ID,
  'GOOGLE_CLIENT_KEY is not defined'
)
const googleClientSecret = assertValue(
  process.env.GOOGLE_CLIENT_SECRET,
  'GOOGLE_CLIENT_SECRET is not defined'
)

const authSecret = assertValue(
  process.env.AUTH_SECRET,
  'AUTH_SECRET is not defined'
)

export const nextAuthConfig = {
  googleClientId,
  googleClientSecret,
  authSecret,
}
