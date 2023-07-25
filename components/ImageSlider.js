import Image from 'next/image'
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFlip,
  EffectCube,
} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

//CoreSwiperCss
import 'swiper/css'

//Module Sliders
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-flip'
import 'swiper/css/effect-cube'

export const Slider = () => {
  return (
    <Swiper
      className='w-[350px] md:w-[700px] xl:w-[500px] border-2 p-3'
      // install Swiper modules
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        Autoplay,
        EffectFlip,
        EffectCube,
      ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      effect={'slide'}
      // autoplay={{ delay: 2000 }}
      loop={true}
      speed={800}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Image
          src='/images/proj-1/1.jpg'
          alt='Demo Image'
          width={699}
          height={387}
          className='swiper-lazy'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/proj-1/2.jpg'
          alt='Demo Image 2'
          width={699}
          height={387}
          className='swiper-lazy'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/proj-1/3.jpg'
          alt='Demo Image 3'
          width={699}
          height={387}
          className='swiper-lazy'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/proj-1/1.jpg'
          alt='Demo Image 4'
          width={699}
          height={387}
          className='swiper-lazy'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/proj-1/1.jpg'
          alt='Demo Image 5'
          width={699}
          height={387}
          className='swiper-lazy'
        />
      </SwiperSlide>
    </Swiper>
  )
}

export const Slider2 = () => {
  return (
    <Swiper
      className='w-[350px] md:w-[700px] xl:w-[500px] border-2 p-3'
      // install Swiper modules
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        Autoplay,
        EffectFlip,
        EffectCube,
      ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      effect={'slide'}
      // autoplay={{ delay: 2000 }}
      loop={true}
      speed={800}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Image
          src='/images/proj-2/1.jpg'
          alt='Demo Image 5'
          width={699}
          height={387}
          className='swiper-lazy'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/proj-2/1.jpg'
          alt='Demo Image 5'
          width={699}
          height={387}
          className='swiper-lazy'
        />
      </SwiperSlide>
    </Swiper>
  )
}
