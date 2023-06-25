import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { sanityConfig } from '@/config/sanity-config'

const imageBuilder = createImageUrlBuilder({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
})

export const urlForImage = (source: Image) => {
  return imageBuilder.image(source).auto('format').fit('max')
}
