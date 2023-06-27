/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */
import { account } from 'next-auth-sanity/schemas'
import { defineConfig } from '@sanity-typed/types'
import { deskTool } from 'sanity/desk'
import { markdownSchema } from 'sanity-plugin-markdown/next'
import post from './schemas/post'
import { sanityConfig } from '@/config/sanity-config'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import user from './schemas/user'
import { visionTool } from '@sanity/vision'

const { projectId, dataset, apiVersion } = sanityConfig

const config = defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: [user, account, post],
  },
  plugins: [
    deskTool(),
    unsplashImageAsset(),
    markdownSchema(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})

export default config
