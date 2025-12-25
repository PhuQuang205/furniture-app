import React from 'react'
import Image from 'next/image'
import { FEATURES } from '@/context'

const CommitSection = () => {
  return (
    <section className='container mx-auto px-4'>
      <div className='py-12 lg:py-20'>
        {/* Sử dụng Grid để tự động căn chỉnh responsive */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
          {FEATURES.map((item) => (
            <div
              key={item.id}
              className='group flex flex-col lg:flex-row items-center justify-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white'
            >
              {/* Icon Container với trang trí hình tròn phía sau */}
              <div className='relative flex-shrink-0'>
                <div className='absolute -bottom-1 -right-1 w-10 h-10 bg-yellow-400/30 rounded-full transition-transform group-hover:scale-125 duration-500' />
                <div className='relative z-10 w-16 h-16 flex items-center justify-center'>
                  <Image
                    src={item.impage}
                    alt={item.title}
                    width={64}
                    height={64}
                    className='object-contain w-12 h-12 transition-transform duration-500 group-hover:-translate-y-1'
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className='flex flex-col gap-1 text-center lg:text-left'>
                <h3 className='font-bold text-black text-lg lg:text-xl leading-tight'>{item.title}</h3>
                <p className='text-sm text-gray-400 font-medium leading-relaxed'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommitSection
