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
      // autoplay={{ delay: 1000 }}
      loop={true}
      speed={800}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src='images/portfolio-1.jpg' alt='' srcset='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/portfolio-1.jpg' alt='' srcset='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/portfolio-1.jpg' alt='' srcset='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/portfolio-1.jpg' alt='' srcset='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/portfolio-1.jpg' alt='' srcset='' />
      </SwiperSlide>
    </Swiper>
  )
}
