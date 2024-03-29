import Image from 'next/image'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Data } from './Utilities/Data'

//CoreSwiperCss
import 'swiper/css'

//Module Sliders
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Slider = () => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#000',
        '--swiper-navigation-size': '25px',
      }}
      className='w-[310px] md:w-[700px] xl:w-[500px] border-2 p-3'
      // install Swiper modules
      modules={[Navigation, Pagination]}
      navigation
      effect='slide'
      speed={800}
      slidesPerView={1}
      pagination={true}
      loop={true}
    >
      {Data[0].portfolio.map((image) => {
        return (
          <SwiperSlide key={image.id}>
            <Image
              src={image.img}
              width={699}
              height={387}
              alt='Demo Image'
              priority={true}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
export const Slider2 = () => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#000',
        '--swiper-navigation-size': '25px',
        // '--swiper-pagination-color': '#000',
      }}
      className='w-[310px] md:w-[700px] xl:w-[500px] border-2 p-3'
      // install Swiper modules
      modules={[Navigation, Pagination]}
      navigation
      effect='slide'
      speed={800}
      slidesPerView={1}
      pagination={true}
      loop={true}
    >
      {Data[0].portfoliov2.map((image) => {
        return (
          <SwiperSlide key={image.id}>
            <Image src={image.img} width={699} height={387} alt='Demo Image' />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
