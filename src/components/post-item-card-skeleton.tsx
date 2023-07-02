/* eslint-disable @next/next/no-img-element */

import { FunctionComponent } from 'react'
import Spinner from './spinner'

interface PostItemCardProps {}

const PostItemCardSkeleton: FunctionComponent<PostItemCardProps> = () => {
  return (
    <section className="flex flex-col justify-center gap-1 ">
      <div className="flex flex-col items-center justify-center bg-gray-200 aspect-square animate-pulse">
        <Spinner />
      </div>
      <div className="w-16 h-4 bg-gray-200 animate-pulse" />
    </section>
  )
}

export default PostItemCardSkeleton
