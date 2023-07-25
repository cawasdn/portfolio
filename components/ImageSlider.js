import Image from 'next/image'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Data from '../assets/project.json'

//CoreSwiperCss
import 'swiper/css'

//Module Sliders
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Slider = () => {
  return (
    <Swiper
      className='w-[350px] md:w-[700px] xl:w-[500px] border-2 p-3'
      // install Swiper modules
      modules={[Navigation, Pagination]}
      navigation
      effect='slide'
      speed={800}
      slidesPerView={1}
      pagination={true}
      loop={true}
    >
      {Data.map((image) => {
        return (
          <>
            <SwiperSlide>
              <Image src={image.img1} width={699} height={387} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={image.img2} width={699} height={387} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={image.img3} width={699} height={387} />
            </SwiperSlide>
          </>
        )
      })}
    </Swiper>
  )
}
export const Slider2 = () => {
  return (
    <Swiper
      className='w-[350px] md:w-[700px] xl:w-[500px] border-2 p-3'
      // install Swiper modules
      modules={[Navigation, Pagination]}
      navigation
      effect='slide'
      speed={800}
      slidesPerView={1}
      pagination={true}
      loop={true}
    >
      {Data.map((image) => {
        return (
          <>
            <SwiperSlide>
              <Image src={image.portfoliov2} width={699} height={387} />
            </SwiperSlide>
          </>
        )
      })}
    </Swiper>
  )
}
