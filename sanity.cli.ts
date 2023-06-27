import { defineCliConfig } from 'sanity/cli'
import { sanityConfig } from '@/config/sanity-config'
/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/

const projectId = sanityConfig.projectId
const dataset = sanityConfig.dataset

export default defineCliConfig({ api: { projectId, dataset } })
