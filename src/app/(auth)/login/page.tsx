'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FurnitureLogo } from '@/components'
import { toast } from 'sonner'
import { login } from '@/lib/services/authService'
import { useRouter } from 'next/navigation'

const initFormState = { email: '', password: '' }

const LoginPage = () => {
  const router = useRouter()
  const [formState, setFormState] = useState(initFormState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [countdown, setCountdown] = useState(8)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await login(formState)
      router.replace('/')
    } catch (err) {
      toast.error('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.')
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Giả sử bạn lưu token trong localStorage hoặc cookie
    const token = localStorage.getItem('accessToken')

    if (token) {
      setIsLoggedIn(true)
      toast.info('Bạn đã đăng nhập. Hệ thống sẽ quay lại trang chủ sau 8 giây.')

      // Bộ đếm ngược mỗi giây
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)

      // Chuyển hướng sau đúng 8 giây
      const redirectTimeout = setTimeout(() => {
        router.push('/')
      }, 8000)

      // Quan trọng: Cleanup để tránh memory leak khi người dùng tắt tab sớm
      return () => {
        clearInterval(timer)
        clearTimeout(redirectTimeout)
      }
    }
  }, [router])

  if (isLoggedIn) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[60vh] p-8 text-center'>
        <FurnitureLogo active={false} />
        <h2 className='text-2xl font-bold mt-6'>Bạn đã đăng nhập rồi!</h2>
        <p className='text-gray-600 mt-2'>
          Đang chuyển hướng về trang chủ trong <span className='text-greenly font-bold'>{countdown}s</span>...
        </p>
        <Button className='mt-6 bg-greenly' onClick={() => router.push('/')}>
          Quay lại ngay lập tức
        </Button>
      </div>
    )
  }

  return (
    <div className='flex items-center justify-center p-8 bg-white'>
      <div className='w-full max-w-md space-y-8'>
        <div className='space-y-2'>
          <FurnitureLogo active={false} />
        </div>

        <div className='space-y-3'>
          <h1 className='text-4xl font-semibold text-gray-900'>Đăng nhập</h1>
          <p className='text-sm text-black'>Vui lòng điền thông tin chi tiết của bạn để truy cập tài khoản.</p>
        </div>

        <form className='space-y-6' onSubmit={handleLogin}>
          <div className='space-y-2'>
            <Label htmlFor='email' className='text-md font-semibold text-black'>
              Email
            </Label>
            <Input
              id='email'
              type='email'
              placeholder='Nhập địa chỉ email'
              className='h-12 border-gray-300 px-5'
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='password' className='text-md font-semibold text-black'>
              Mật khẩu
            </Label>
            <Input
              id='password'
              type='password'
              placeholder='Nhập mật khẩu'
              className='h-12 px-5 border-gray-300'
              value={formState.password}
              onChange={(e) => setFormState({ ...formState, password: e.target.value })}
              required
            />
          </div>

          {error && <p className='text-red-500 text-sm'>{error}</p>}

          <div className='flex items-center justify-between'>
            <Link href='/forgot-password' className='text-sm font-medium text-greenly underline underline-offset-4'>
              Quên mật khẩu?
            </Link>
          </div>

          <div className='flex flex-col'>
            <Button
              type='submit'
              disabled={loading}
              className='bg-greenly mb-6 h-12 text-md cursor-pointer hover:bg-greenly/90'
            >
              {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </Button>
          </div>

          <div className='text-center'>
            <span className='text-sm text-black'>
              Chưa có tài khoản?{' '}
              <Link href='/register' className='text-greenly underline underline-offset-4 font-medium'>
                Đăng ký
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
