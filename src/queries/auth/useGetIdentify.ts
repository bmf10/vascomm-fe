import { BaseResponse, User } from '@/types'
import axios from '@/utils/axios'
import { useQuery } from '@tanstack/react-query'

export default function useGetIdentify() {
  return useQuery<User>(
    ['USER_LOGIN'],
    async ({ signal }) => {
      const response = await axios.get<BaseResponse<User>>(`auth/identify`, {
        signal,
      })
      return response?.data.data || {}
    },
    { retry: 1, keepPreviousData: false }
  )
}
