import { apiVersion,dataset, projectId,useCdn } from '@config/sanity-config';
import { createClient } from 'next-sanity'


export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
