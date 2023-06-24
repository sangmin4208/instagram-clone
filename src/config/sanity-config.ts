import { assertValue } from '@/utils/assert-value'

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-24'

const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

const useCdn = false

const getToken = () => {
  return assertValue(
    process.env.SANITY_API_TOKEN,
    'Missing environment variable: SANITY_API_TOKEN'
  )
}

export const sanityConfig = {
  apiVersion,
  dataset,
  projectId,
  useCdn,
  getToken,
}
