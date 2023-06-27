'use client'

import FollowingListItem from '@/components/following-bar'
import { FunctionComponent } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { useFetchFollowings } from '../hooks/use-fetch-followings'

interface FollowingBarSectionProps {}

const FollowingBarSection: FunctionComponent<
  FollowingBarSectionProps
> = ({}) => {
  const { data, hasMore, size, setSize } = useFetchFollowings()
  return (
    <section>
      {data && (
        <section
          id="scrollableDiv"
          className="flex gap-4 overflow-auto w-full md:w-[calc(60vw)]"
        >
          <InfiniteScroll
            className="flex gap-4"
            dataLength={data.length}
            next={() => {
              setSize(size + 1)
            }}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {data.map((page, i) => (
              <section className="flex gap-4" key={i}>
                {page.followings.map((following, i) => (
                  <FollowingListItem key={i} following={following} />
                ))}
              </section>
            ))}
          </InfiniteScroll>
        </section>
      )}
    </section>
  )
}

export default FollowingBarSection
