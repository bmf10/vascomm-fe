import { BaseResponse } from '@/types'
import axios from '@/utils/axios'
import { useMutation } from '@tanstack/react-query'

interface Payload {
  readonly id: string
  readonly name?: string
  readonly email?: string
  readonly phone?: string
  readonly password?: string
  readonly role?: 'admin' | 'user'
  readonly status?: 'active' | 'inactive'
}

const usePatchUser = () =>
  useMutation((payload: Payload) =>
    axios.patch<BaseResponse<unknown>>(`user/${payload.id}`, {
      ...payload,
      id: undefined,
    })
  )

export default usePatchUser
