import { BaseResponse, Pagination, User } from '@/types'
import axios from '@/utils/axios'
import { useQuery } from '@tanstack/react-query'

export default function useGetUser() {
  return useQuery<Pagination<User>>(['USER_LIST'], async ({ signal }) => {
    const response = await axios.get<BaseResponse<Pagination<User>>>(`user`, {
      signal,
    })
    return response?.data.data || {}
  })
}
