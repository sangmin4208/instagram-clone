'use client'

import FollowingListItemSkeleton from '@/components/following-list-item-skeleton'
import { FunctionComponent } from 'react'
import ScrollableBar from '@/components/scrollable-bar'

interface FollowingBarSectionSkeletonProps {}

const FollowingBarSectionSkeleton: FunctionComponent<
  FollowingBarSectionSkeletonProps
> = () => {
  return (
    <section>
      <ScrollableBar>
        {Array.from({ length: 8 }).map((_, index) => (
          <FollowingListItemSkeleton key={index} />
        ))}
      </ScrollableBar>
    </section>
  )
}

export default FollowingBarSectionSkeleton
