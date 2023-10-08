'use client'
import { ReactNode, useEffect } from 'react'
import Header from './Header'
import Aside from './Aside'
import { useAuth } from '@/context/Auth'
import { useRouter } from 'next/navigation'

interface Props {
  readonly children: ReactNode
}

export default function Layout({ children }: Props) {
  const { isFetched, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (isFetched) {
      timeout = setTimeout(() => {
        if (!user) {
          router.push('/login')
        }
      }, 1000)
    }

    return () => (timeout ? clearTimeout(timeout) : undefined)
  }, [isFetched, router, user])

  return (
    <main className="">
      <Header />
      <div className="flex">
        <Aside />
        <section className="bg-neutral-50 flex-1">{children}</section>
      </div>
    </main>
  )
}
