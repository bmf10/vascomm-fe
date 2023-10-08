'use client'
import { ReactNode, useEffect } from 'react'
import LeftSide from './LeftSide'
import { useAuth } from '@/context/Auth'
import { useRouter } from 'next/navigation'

interface Props {
  readonly children: ReactNode
}

export default function Layout({ children }: Props) {
  const { isLoading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && user) {
      if (user.role === 'admin') {
        router.push('/dashboard')
      } else {
        router.push('/')
      }
    }
  }, [isLoading, router, user])

  return (
    <main className="flex justify-center relative h-screen overflow-hidden">
      <section className="max-w-[1366px] w-full z-20 relative h-full flex">
        <LeftSide />
        <div className="flex-1 flex justify-center items-center flex-col z-20 ">
          {children}
        </div>
        {/* background */}
        <div className="w-[800px] h-[800px] z-0 absolute bg-white bg-opacity-20 rounded-full top-[45%] -left-[117px]"></div>
        <div className="w-[500px] h-[500px] z-0 absolute bg-white bg-opacity-20 rounded-full top-0 -left-72"></div>
        {/* background */}
      </section>
      <div className="w-1/2 top-0 left-0 h-full bg-[#41A0E4] absolute z-0"></div>
    </main>
  )
}
