import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '@/lib/services/productService'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'], // Key để Tanstack Query quản lý cache
    queryFn: getAllProducts,
    staleTime: 1000 * 60 * 5 // Dữ liệu được coi là "tươi" trong 5 phút, không cần call lại API
  })
}
