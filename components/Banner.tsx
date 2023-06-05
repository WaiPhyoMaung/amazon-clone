'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Banner = () => {
  return (
    <div className="relative bg-amazon_blue-light">
      <div className="absolute w-full h-64 bg-gradient-to-t from-gray-950 to-transparent bottom-0 " />
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        interval={5000}
      // width={10000}
      >
        <div className="">
          <img
            className="rounded-t-3xl object-contain"
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
            alt=""
            className="rounded-t-3xl"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61q5Pg3hO8L._SX3000_.jpg"
            alt=""
            className="rounded-t-3xl"
          />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
