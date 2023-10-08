import OgAxios from 'axios'
import { toast } from 'react-hot-toast'
import { getCookie } from 'react-use-cookie'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const axios = OgAxios.create({
  baseURL: BASE_URL,
})

axios.interceptors.request.use((value) => {
  const token = getCookie('@token')
  value.headers.Authorization = `Bearer ${token}`
  return value
})

axios.interceptors.response.use(undefined, (error) => {
  if (error?.response?.data?.message && typeof window === 'object') {
    if (error?.response?.data?.message !== 'Unauthorized') {
      toast.error(error?.response?.data?.message)
    }
  }

  throw error
})

export default axios
