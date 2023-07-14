import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

type Props = {
  title?: string
}


export default function PostFeed({ title }: Props) {
  return (
    <div
      className='container mx-auto bg-white border-x border-black p-6'
    >
      {title && <h3 className='text-xl md:text-3xl text-center pb-6'>{title}</h3>}
      <Swiper
        modules={[FreeMode, Pagination]}
        freeMode
        pagination={{ clickable: true, dynamicBullets: true, el: '.swiper-pagination' }}
        breakpoints={{
          300: {
            slidesPerView: 'auto',
            spaceBetween: 24,
            freeMode: true,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 24,
            freeMode: true,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
            freeMode: false,
          }
        }}
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
      <div className='relative pt-10'>
        <div className="swiper-pagination"></div>
      </div>
    </div >

  )
}