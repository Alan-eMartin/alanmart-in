import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Scrollbar } from 'swiper/modules'
import 'swiper/css';


export default function PostFeed() {
  return (
    <div
      className='container mx-auto bg-white border-x border-black p-6'
    >
      <Swiper
        modules={[FreeMode, Scrollbar]}
        spaceBetween={24}
        slidesPerView={3}
        freeMode={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='border border-black'>
          <div className='h-[300px]' />
        </SwiperSlide>
        <SwiperSlide className='border border-black'>
          <div className='h-[300px]' />
        </SwiperSlide>
        <SwiperSlide className='border border-black'>
          <div className='h-[300px]' />
        </SwiperSlide>
        <SwiperSlide className='border border-black'>
          <div className='h-[300px]' />
        </SwiperSlide>
      </Swiper>
    </div>

  )
}