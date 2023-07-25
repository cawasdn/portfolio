import Image from 'next/image'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

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
      <SwiperSlide>
        <Image
          src='/images/proj-1/1.jpg'
          alt='Demo Image'
          width={699}
          height={387}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/proj-1/2.jpg'
          alt='Demo Image 2'
          width={699}
          height={387}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/proj-1/3.jpg'
          alt='Demo Image 3'
          width={699}
          height={387}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/proj-1/1.jpg'
          alt='Demo Image 4'
          width={699}
          height={387}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/proj-1/1.jpg'
          alt='Demo Image 5'
          width={699}
          height={387}
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
      modules={[Navigation, Pagination]}
      navigation
      effect='slide'
      speed={800}
      slidesPerView={1}
      pagination={true}
      loop={true}
    >
      <SwiperSlide>
        <Image
          src='/images/proj-2/1.jpg'
          alt='Demo Image 5'
          width={699}
          height={387}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/images/proj-2/1.jpg'
          alt='Demo Image 5'
          width={699}
          height={387}
        />
      </SwiperSlide>
    </Swiper>
  )
}
