'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function TanstackProvider({ children }: { children: React.ReactNode }) {
  // Tạo QueryClient bên trong useState để đảm bảo tính duy nhất (Singleton)
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // Dữ liệu được coi là mới trong 1 phút
        refetchOnWindowFocus: false, // Tắt tự động load lại khi chuyển tab (tùy chọn)
        retry: 1 // Thử lại 1 lần nếu API lỗi
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Devtools giúp Quang soi được dữ liệu cache, cực kỳ hữu ích khi debug */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
