import { FunctionComponent } from 'react'
interface FollowingListItemSkeletonProps {}

const FollowingListItemSkeleton: FunctionComponent<
  FollowingListItemSkeletonProps
> = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-1">
        <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse" />
        <div className="w-16 h-4 bg-gray-200 rounded-full animate-pulse" />
      </div>
    </>
  )
}

export default FollowingListItemSkeleton
