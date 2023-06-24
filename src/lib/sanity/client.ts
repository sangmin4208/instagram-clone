import { sanityConfig } from '@config/sanity-config'
import { createClient } from 'next-sanity'

const { getToken, ...config } = sanityConfig
export const client = createClient({
  ...config,
  token: sanityConfig.getToken(),
})
