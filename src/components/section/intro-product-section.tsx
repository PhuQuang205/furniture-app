'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import CardProduct from '@/components/CardProduct'
import { PropsProducts } from '@/lib/services/productService'
import { useProducts } from '@/lib/hook/useProducts'

const filters = ['Best Sellers', 'Latest Products']

const IntroProductSection = () => {
  const [activeFilter, setActiveFilter] = useState('Latest Products')

  // Sử dụng TanStack Query thay cho useEffect & useState
  const { data, isLoading, error } = useProducts()

  // Xử lý dữ liệu (lấy mảng products từ response)
  const products = data?.data || []

  // Logic filter thực tế (nếu API chưa hỗ trợ filter thì filter ở client)
  const displayProducts =
    activeFilter === 'Best Sellers'
      ? [...products].sort((a, b) => (b.sales || 0) - (a.sales || 0)) // Ví dụ logic
      : products
  return (
    <section className='overflow-hidden'>
      <div className='container mx-auto px-8 lg:px-4 py-8 lg:py-16'>
        <div className='flex items-center justify-between my-4'>
          <div className='space-y-4'>
            <div className='inline-flex items-center gap-2'>
              <div className='w-5 h-0.5 rounded-2xl bg-yelly' />
              <p className='text-base font-semibold'>Sản phẩm</p>
            </div>
            <h1 className='text-4xl font-semibold'>
              <span className='text-greenly'>Sản phẩm</span> của chúng tôi
            </h1>
          </div>
          <div className='max-w-80'>
            <p className='text-sm'>
              Sản phẩm chất lượng giá siêu rẻ - chỉ cần bạn đế hốt - mua ngay không hết bây giờ.
            </p>
          </div>
        </div>

        <div className='flex lg:justify-center my-8 overflow-x-scroll no-scrollbar'>
          <div className='flex-none flex gap-2'>
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'px-6 rounded-full cursor-pointer',
                  activeFilter === filter
                    ? 'bg-greenly hover:greenly/80 text-white rounded-full border-none'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        {/* --- PHẦN PRODUCT --- */}
        <div className='no-scrollbar overflow-x-auto lg:px-0 mx-[-2rem]'>
          <div className='flex gap-4 lg:grid lg:grid-cols-5 px-8'>
            {isLoading ? (
              // Quang nên dùng Skeleton ở đây thay vì text "Loading..." để UI đẹp hơn
              Array(5)
                .fill(0)
                .map((_, i) => <div key={i} className='w-64 h-80 bg-gray-100 animate-pulse rounded-xl' />)
            ) : error ? (
              <p className='text-red-500'>Đã có lỗi xảy ra khi tải sản phẩm.</p>
            ) : (
              displayProducts.slice(0, 5).map((product: PropsProducts) => (
                <div key={product.id} className='flex-shrink-0 w-64 lg:w-full'>
                  <CardProduct product={product} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroProductSection
