import { BaseResponse, Pagination, Product } from '@/types'
import axios from '@/utils/axios'
import { useQuery } from '@tanstack/react-query'

interface Params {
  readonly status: 'active' | 'inactive'
}

export default function useGetProduct({ status }: Params) {
  return useQuery<Pagination<Product>>(['PRODUCT_LIST'], async ({ signal }) => {
    const response = await axios.get<BaseResponse<Pagination<Product>>>(
      `product`,
      {
        params: { status },
        signal,
      }
    )
    return response?.data.data || {}
  })
}
