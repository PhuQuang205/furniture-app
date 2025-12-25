'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus } from 'lucide-react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { useState, useEffect } from 'react'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    // Trả về một placeholder hoặc loading nhẹ để tránh layout shift
    return <div className='min-h-[600px] bg-subbg' />
  }
  return (
    <section className='relative bg-subbg py-16 lg:py-24'>
      <div className='container mx-auto px-8 lg:px-4 w-full'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-16'>
          <div className='space-y-8 flex-1'>
            <div className='w-full flex justify-center lg:justify-start'>
              <div className='flex w-fit items-center px-4 py-2 rounded-full bg-white gap-2 shadow-sm'>
                <div className='relative flex h-8 w-8 items-center justify-center'>
                  <span className='animate-ping-small absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40'></span>
                  <span className='relative inline-flex rounded-full h-7 w-7 bg-greenly items-center justify-center'>
                    <Image src='/resource/chair-small.png' width={16} height={16} className='size-4' alt='chair' />
                  </span>
                </div>
                <p className='text-sm font-semibold text-slate-700'>Nội thất cao cấp Hoàng Hà</p>
              </div>
            </div>
            <div>
              <h1 className='text-5xl text-center lg:text-left lg:text-7xl font-black text-black'>
                Khám phá <br />
                <span className='text-5xl text-center lg:text-left lg:text-7xl font-black text-greenly'>
                  hàng đồ nội thất
                </span>
              </h1>
            </div>
            <p className='text-center text-md text-gray-700 max-w-md md:max-w-none lg:text-left text-pretty'>
              Mang đến cho bạn những thiết kế sang trọng, tiện nghi và phù hợp với mọi phong cách. Từ phòng khách, phòng
              ngủ đến văn phòng làm việc.
            </p>
            <div className=''>
              <div className='flex flex-col md:flex-row'>
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
              <div className='flex flex-col gap-1 justify-center w-full'>
                <div className='font-semibold text-xl text-gray-900'>4.9 Đáng giá+</div>
                <div className='text-sm text-gray-700'>Được 500+ khách hàng tin tưởng</div>
              </div>
            </div>
          </div>
          <div className='flex-1 flex flex-col justify-start lg:items-end w-full'>
            <div className='w-full lg:w-[800px]'>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={16}
                breakpoints={{
                  320: { slidesPerView: 1.2, spaceBetween: 10 },
                  1024: { slidesPerView: 2, spaceBetween: 20 }
                }}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                onSwiper={setSwiperInstance}
                className='furniture-hero-swiper opacity-0 [&.swiper-initialized]:opacity-100 transition-opacity duration-300'
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
                            className='object-cover rounded-xl w-full h-auto'
                            priority={category.id === 1}
                          />
                        </div>
                        <div className='absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium'>
                          {category.price}
                        </div>
                        <div className='p-2 flex items-center justify-between'>
                          <div>
                            <h3 className='text-xl font-bold text-gray-900 mb-1'>{category.title}</h3>
                            <p className='text-gray-700'>{category.items}</p>
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
