import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Post } from '@/sanity/sanity';
import { urlForImage } from '@/sanity/urlForImage';

type Props = {
  title?: string
  posts: Post[]
}


export default function PostFeed({ title, posts }: Props) {
  return (
    <div
      className='container mx-auto bg-white border-x border-black p-6'
    >
      {title && <h3 className='text-xl md:text-3xl text-center pb-6'>{title}</h3>}
      <Swiper
        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' } as React.CSSProperties}
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
        {posts.map((post) => (
          <SwiperSlide className='border border-black'>
            <a title={`Read: ${post.title}`} href={`/blog/post/${post.slug}`}>
              <div className='h-[300px] flex items-end justify-center p-6'>
                <h3
                  className='relative z-20 text-white text-base md:text-lg mb-1 whitespace-normal line-clamp-2 font-bold text-center'
                >
                  {post.title}
                </h3>
                <img
                  className='object-cover h-full w-full absolute inset-0'
                  src={urlForImage(post.mainImage).url()}
                  alt={post.mainImage.altText}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"
                >
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='relative pt-10'>
        <div className="swiper-pagination">
          {/* Pagination Container */}
        </div>
      </div>
    </div>
  )
}