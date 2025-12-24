'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FurnitureLogo } from '@/components'
import { Heart, Menu, ShoppingBagIcon, User } from 'lucide-react'
import { NAV_LINK } from '@/context'
import { Customer } from '@/lib/services/authService'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

const HeaderSection = () => {
  const [customer, setCustomer] = useState<Customer | null>(null)
  const [isSticky, setIsSticky] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const stored = localStorage.getItem('customer')
    if (stored) setCustomer(JSON.parse(stored))

    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getInitial = (name: string) => name.charAt(0).toUpperCase()

  return (
    <header
      className={cn(
        'bg-white transition-all duration-500',
        isSticky ? 'shadow-sm py-4 fixed top-0 left-0 w-full z-90 bg-greenly' : 'py-4 lg:py-6'
      )}
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between px-6 lg:px-4'>
          <Link href='http://localhost:3000/'>
            <FurnitureLogo className={cn(isSticky && 'text-white')} active />
          </Link>
          <nav className='hidden lg:flex gap-8 text-sm font-medium text-black'>
            {NAV_LINK.map((item) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn('relative transition-colors', isActive && 'font-bold', isSticky && 'text-yelly')}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>
          <div className={cn('hidden lg:flex items-center text-black space-x-5', isSticky && 'text-yelly')}>
            <Link href='/wishlist'>
              <Heart className='size-5' />
            </Link>
            <Link href='/shopping-cart' className='relative transition'>
              <ShoppingBagIcon className='size-5' />
            </Link>
            <Link href='/my-account'>
              {customer ? (
                <Avatar className='size-8 border border-white'>
                  <AvatarImage src={customer.avatarUrl || ''} alt={customer.lastName} />
                  <AvatarFallback className='bg-green-100 text-greenly'>
                    {getInitial(customer.lastName || 'U')}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <User className='size-5 hover:text-greenly transition' />
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
