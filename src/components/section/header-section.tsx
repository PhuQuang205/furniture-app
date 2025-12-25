'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FurnitureLogo } from '@/components'
import { Heart, Menu, ShoppingBagIcon } from 'lucide-react'
import { NAV_LINK } from '@/context'
import { Customer } from '@/lib/services/authService'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

const HeaderSection = () => {
  const [customer, setCustomer] = useState<Customer | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const stored = localStorage.getItem('customer')
    if (stored) setCustomer(JSON.parse(stored))
  }, [])

  const getInitial = (name: string) => name.charAt(0).toUpperCase()

  return (
    <header className='bg-white py-4'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between px-6 lg:px-4'>
          <Link href='/'>
            <FurnitureLogo active />
          </Link>

          <nav className='hidden lg:flex gap-8 text-sm font-medium text-black'>
            {NAV_LINK.map((item) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn('relative transition-colors', isActive && 'font-bold')}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>

          <div className='hidden lg:flex items-center text-black space-x-5'>
            <Link href='/wishlist'>
              <Heart className='size-5' />
            </Link>

            <Link href='/shopping-cart' className='relative transition'>
              <ShoppingBagIcon className='size-5' />
            </Link>

            <Link href='/my-account'>
              {customer ? (
                <Avatar className='size-8'>
                  <AvatarImage src={customer.avatarUrl || ''} alt={customer.lastName} />
                  <AvatarFallback className='bg-green-100 text-greenly'>
                    {getInitial(customer.lastName || 'U')}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <Avatar className='size-8'>
                  <AvatarImage
                    src='https://i.pinimg.com/1200x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg'
                    alt='default'
                  />
                  <AvatarFallback>Y</AvatarFallback>
                </Avatar>
              )}
            </Link>
          </div>

          <button className='lg:hidden p-2 bg-greenly rounded-sm'>
            <Menu className='size-5 text-yelly' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default HeaderSection
