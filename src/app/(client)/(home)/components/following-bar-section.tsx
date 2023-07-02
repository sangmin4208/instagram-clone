'use client'

import FollowingBarSectionSkeleton from './following-bar-section-skeleton'
import FollowingListItem from '@/components/following-list-item'
import FollowingListItemSkeleton from '@/components/following-list-item-skeleton'
import { FunctionComponent } from 'react'
import Icons from '@/components/icons'
import InfiniteScroll from 'react-infinite-scroll-component'
import ScrollableBar from '@/components/scrollable-bar'

import { useFetchFollowings } from '../hooks/use-fetch-followings'

interface FollowingBarSectionProps {}

const FollowingBarSection: FunctionComponent<FollowingBarSectionProps> = () => {
  const { data, hasMore, size, setSize, isValidating, isLoading } =
    useFetchFollowings()
  const followings = data?.map((page) => page.followings).flat() ?? []

  if (isLoading) {
    return <FollowingBarSectionSkeleton />
  }
  return (
    <section className="relative z-0">
      {data && (
        <InfiniteScroll
          dataLength={data.length}
          next={() => setSize(size + 1)}
          hasMore={hasMore}
          loader={null}
        >
          <ScrollableBar
            afterChange={(previous) => {
              if (previous === data.length - 1 && hasMore) {
                setSize(size + 1)
              }
            }}
          >
            {followings.map((following) => (
              <FollowingListItem key={following.id} following={following} />
            ))}
            {isValidating &&
              hasMore &&
              Array.from({ length: 2 }).map((_, index) => (
                <FollowingListItemSkeleton key={index} />
              ))}
            {!hasMore && (
              <div className="flex flex-col items-center justify-center gap-2">
                <Icons.SmilePlus size={32} />
                <section className="flex flex-col items-center justify-center text-xs">
                  <p>새로운 사람을</p>
                  <p>팔로우 해보세요.</p>
                </section>
              </div>
            )}
          </ScrollableBar>
        </InfiniteScroll>
      )}
    </section>
  )
}

export default FollowingBarSection
