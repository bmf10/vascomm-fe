'use client'
import useGetIdentify from '@/queries/auth/useGetIdentify'
import { User } from '@/types'
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { setCookie } from 'react-use-cookie'

interface Values {
  user: User | undefined
  isLoading: boolean
  isFetched: boolean
  refetch: () => void
  logout: () => void
}

const AuthContext = createContext<Values>({} as Values)

export const useAuth = () => useContext(AuthContext)

interface Props {
  readonly children: ReactNode
}

const AuthProvider: FC<Props> = ({ children }) => {
  const { data, isLoading, refetch, remove, isFetched } = useGetIdentify()
  const [user, setUser] = useState<User>()

  useEffect(() => {
    if (data) {
      setUser(data)
    } else {
      setUser(undefined)
    }
  }, [data])

  const logout = () => {
    setCookie('@token', '')
    remove()
    setUser(undefined)
  }

  return (
    <AuthContext.Provider
      value={{ user, isLoading, refetch, logout, isFetched }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
