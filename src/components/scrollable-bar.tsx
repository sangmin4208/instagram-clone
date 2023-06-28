import 'react-multi-carousel/lib/styles.css'

import Carousel, { CarouselProps } from 'react-multi-carousel'
import React, { FunctionComponent } from 'react'

const defaultResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
}
// extends section
interface ScrollableBarProps {
  children: React.ReactNode
  responsive?: CarouselProps['responsive']
  afterChange?: CarouselProps['afterChange']
}
const ScrollableBar: FunctionComponent<ScrollableBarProps> = ({
  children,
  afterChange,
  responsive = defaultResponsive,
}) => {
  return (
    <Carousel
      centerMode={true}
      afterChange={afterChange}
      itemClass="flex justify-center items-center"
      responsive={responsive}
    >
      {children}
    </Carousel>
  )
}

export default ScrollableBar
