'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { LockKeyhole } from 'lucide-react'

function AuthRequiredPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleExpired = () => {
      setIsOpen(true)
    }

    // Lắng nghe sự kiện từ axios interceptor
    window.addEventListener('auth-session-expired', handleExpired)

    // Kiểm tra ngay khi load trang nếu kh  ông có token
    const token = localStorage.getItem('accessToken')
    if (!token) {
      setIsOpen(true)
    }

    return () => window.removeEventListener('auth-session-expired', handleExpired)
  }, [])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm'>
      <div className='max-w-md border rounded-lg bg-card p-6 shadow-lg'>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant='icon' className='bg-primary/10 size-18 text-primary'>
              <LockKeyhole className='size-14' />
            </EmptyMedia>
            <EmptyTitle>Phiên đăng nhập hết hạn</EmptyTitle>
            <EmptyDescription>
              Vui lòng đăng nhập lại để tiếp tục quản lý dự án và bảo mật thông tin của bạn.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div className='flex flex-col w-full gap-2'>
              <Button onClick={() => (window.location.href = '/login')} className='cursor-pointer'>
                Đăng nhập ngay
              </Button>
            </div>
          </EmptyContent>
        </Empty>
      </div>
    </div>
  )
}

export default AuthRequiredPopup
