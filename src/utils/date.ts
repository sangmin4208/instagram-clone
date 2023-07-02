import { format } from 'timeago.js'

export function timeAgo(data: string) {
  return format(data, 'ko')
}
