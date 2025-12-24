'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus } from 'lucide-react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

const furnitureCategories = [
  {
    id: 1,
    title: 'Phòng Khách',
    items: '25+ sản phẩm',
    price: '$1,500',
    image: '/resource/bed-room/bed-room-blue.jpg'
  },
  {
    id: 2,
    title: 'Phòng Ngủ',
    items: '100+ sản phẩm',
    price: '$1,200',
    image: '/resource/bed-room/bed-room-gray.jpg'
  },
  {
    id: 3,
    title: 'Phòng Bếp',
    items: '200+ sản phẩm',
    price: '$900',
    image: '/resource/bed-room/bed-room-green.jpg'
  },
  {
    id: 4,
    title: 'Phòng Bếp',
    items: '200+ sản phẩm',
    price: '$900',
    image: '/resource/bed-room/bed-room-green.jpg'
  },
  {
    id: 5,
    title: 'Phòng Bếp',
    items: '200+ sản phẩm',
    price: '$900',
    image: '/resource/bed-room/bed-room-green.jpg'
  }
]

const BannerSection = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>()

  return (
    <section className='relative bg-subbg py-16 lg:py-24'>
      <div className='container mx-auto px-8 lg:px-4 '>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-16'>
          <div className='space-y-8'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-white gap-2 shadow-sm'>
              <div className='relative flex h-8 w-8 items-center justify-center'>
                <span className='animate-ping-small absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-40'></span>
                <span className='relative inline-flex rounded-full h-7 w-7 bg-amber-500 items-center justify-center'>
                  <Image src='/resource/chair-small.png' width={16} height={16} className='size-4' alt='chair' />
                </span>
              </div>
              <p className='text-sm font-semibold text-slate-700'>Nội thất cao cấp Hoàng Hà</p>
            </div>
            <div>
              <h1 className='text-7xl font-black text-black'>Khám phá</h1>
              <br />
              <h1 className='text-7xl font-black text-greenly'>hàng đồ nội thất</h1>
            </div>
            <p className='text-md text-black max-w-md lg:max-w-lg text-pretty'>
              Mang đến cho bạn những thiết kế sang trọng, tiện nghi và phù hợp với mọi phong cách. Từ phòng khách, phòng
              ngủ đến văn phòng làm việc.
            </p>
            <div className=''>
              <div className='flex flex-col md:flex-row gap-3'>
                <div className=''>
                  <Button className='h-12 bg-greenly w-full md:w-full text-white px-16 text-base hover:bg-greenly/80 rounded-full'>
                    Vào cửa hàng ngay bây giờ
                    <ArrowRight className='size-5' />
                  </Button>
                </div>

                <div>
                  <Button
                    variant='ghost'
                    className='text-black px-8 py-3 text-base underline decoration-3 decoration-gray-700 w-full md:w-full underline-offset-4'
                  >
                    Xem tất cả các sản phẩm
                  </Button>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-4 max-sm:justify-between'>
              <div className='flex -space-x-4'>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className='w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white flex items-center justify-center text-white text-sm font-medium'
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className='size-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center'>
                  <Plus className='size-5' />
                </div>
              </div>
              <div>
                <div className='font-semibold text-gray-900'>4.9 Đáng giá+</div>
                <div className='text-sm text-gray-600'>Được 500+ khách hàng tin tưởng</div>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='w-[800px]'>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                onSwiper={setSwiperInstance}
                className='furniture-hero-swiper'
              >
                {furnitureCategories.map((category) => (
                  <SwiperSlide key={category.id}>
                    <div className='relative rounded-xl bg-white border-2 border-gray-300'>
                      <div className='flex-none'>
                        <div className='p-2'>
                          <Image
                            src={category.image}
                            alt={category.title}
                            width={400}
                            height={300}
                            className='object-cover rounded-xl w-auto h-auto'
                            loading='lazy'
                          />
                        </div>
                        <div className='absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium'>
                          {category.price}
                        </div>
                        {/* Nội dung */}
                        <div className='p-2 flex items-center justify-between'>
                          <div>
                            <h3 className='text-xl font-bold text-gray-900 mb-1'>{category.title}</h3>
                            <p className='text-gray-600'>{category.items}</p>
                          </div>
                          <div className='group'>
                            <button className='size-10 bg-greenly text-white rounded-full flex items-center justify-center'>
                              <ArrowUpRight className='size-6 transition-all duration-300 group-hover:rotate-45 group-hover:cursor-pointer' />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className='flex items-center justify-start gap-4 mt-4'>
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className='size-10 bg-greenly text-white rounded-full flex items-center justify-center cursor-pointer'
              >
                <ArrowLeft className='size-6 hover:scale-110' />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className='size-10 bg-greenly text-white rounded-full flex items-center justify-center cursor-pointer'
              >
                <ArrowRight className='size-6 hover:scale-110' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSection
