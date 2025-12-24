'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { getProductByCategoryId, PropsProducts } from '@/lib/services/productService'
import { CardProduct } from '@/components'
import { CommitSection } from '@/components/section'
import { getCategories, PropsCategory } from '@/lib/services/categoryService'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const DetailCategoty = () => {
  const { id } = useParams()
  const [products, setProducts] = useState<PropsProducts[]>([])
  const [categories, setCategories] = useState<PropsCategory[]>([])
  const [categoryCurrent, setCategoryCurrent] = useState<PropsCategory>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProductById = async () => {
      setLoading(true)
      try {
        const res = await getProductByCategoryId(Number(id))
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchProductById()
  }, [id])

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      try {
        const res = await getCategories()
        setCategories(res)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    if (categories.length > 0 && id) {
      const cate = categories.find((item) => item.id === Number(id))
      setCategoryCurrent(cate)
    }
  }, [categories, id])

  return (
    <div className='overflow-hidden'>
      <div className='container mx-auto px-8 lg:px-4'>
        <div className='flex flex-col md:flex-row md:items-center items-start justify-between gap-8 my-8'>
          <div className='max-sm:w-full flex-none flex flex-col justify-center items-start'>
            <h1 className='text-xl font-semibold text-black'>{categoryCurrent?.name}</h1>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href='/'>Trang chủ</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href=''>{categoryCurrent?.name}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className='w-full'>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 }
              }}
              navigation
              pagination={{ clickable: true }}
              className='!pb-8 category-swiper'
            >
              {categories
                .filter((item) => item.id !== Number(id))
                .map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link href={`/categories/${item.id}`} className='block'>
                      <div className='flex flex-col gap-2 items-center cursor-pointer hover:opacity-90 transition'>
                        <div className='rounded-lg overflow-hidden w-full aspect-square bg-gray-100'>
                          <Image
                            src={
                              item.image || 'https://i.pinimg.com/736x/03/5c/40/035c409a7450fe3149baec88d278d8b0.jpg'
                            }
                            alt={item.alias}
                            width={300}
                            height={300}
                            className='object-cover w-full h-full'
                            priority
                          />
                        </div>
                        <p className='font-medium text-sm sm:text-base'>{item.name}</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div className='py-8 lg:py-16 border-t border-gray-600'>
          <div className='grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
            {loading
              ? 'Đang tải sản phẩm...'
              : products.map((product) => <CardProduct key={product.id} product={product} />)}
          </div>
        </div>
        <CommitSection />
      </div>
    </div>
  )
}

export default DetailCategoty
