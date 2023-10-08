import { BaseResponse } from '@/types'
import axios from '@/utils/axios'
import { useMutation } from '@tanstack/react-query'

interface Payload {
  readonly email: string
  readonly password: string
}

interface Response {
  readonly token: string
}

const usePostLogin = () =>
  useMutation((payload: Payload) =>
    axios.post<BaseResponse<Response>>('auth/login', payload)
  )

export default usePostLogin
