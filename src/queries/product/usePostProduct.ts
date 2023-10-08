import { BaseResponse } from '@/types'
import axios from '@/utils/axios'
import { useMutation } from '@tanstack/react-query'

interface Payload {
  readonly name: string
  readonly image: string
  readonly price: string | number
}

const usePostProduct = () =>
  useMutation((payload: Payload) =>
    axios.post<BaseResponse<unknown>>('product', payload)
  )

export default usePostProduct
