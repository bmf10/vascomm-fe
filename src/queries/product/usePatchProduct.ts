import { BaseResponse } from '@/types'
import axios from '@/utils/axios'
import { useMutation } from '@tanstack/react-query'

interface Payload {
  readonly id: string
  readonly name?: string
  readonly image?: string
  readonly price?: string | number
  readonly status?: 'active' | 'inactive'
}

const usePatchProduct = () =>
  useMutation((payload: Payload) =>
    axios.patch<BaseResponse<unknown>>(`product/${payload.id}`, {
      ...payload,
      id: undefined,
    })
  )

export default usePatchProduct
