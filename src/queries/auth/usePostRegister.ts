import { BaseResponse } from '@/types'
import axios from '@/utils/axios'
import { useMutation } from '@tanstack/react-query'

interface Payload {
  readonly name: string
  readonly email: string
  readonly phone: string
}

const usePostUser = () =>
  useMutation((payload: Payload) =>
    axios.post<BaseResponse<unknown>>('user/create', payload)
  )

export default usePostUser
