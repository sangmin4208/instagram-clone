import { createClient } from 'next-sanity'

import { sanityConfig } from '@/config/sanity-config'

const { getToken, ...config } = sanityConfig
export const client = createClient({
  ...config,
  token: sanityConfig.getToken(),
})
