import Image from 'next/image'
import { FC, ReactNode } from 'react'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import Link from 'next/link'
import { useAuth } from '@/context/Auth'
import { setCookie } from 'react-use-cookie'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  const auth = useAuth()

  return (
    <main className="flex items-center flex-col">
      <header className="h-[70px] border-b border-x border-[#E4E4E4] w-full flex justify-center fixed z-10 bg-white">
        <nav className="max-w-[1366px] w-full px-10 py-4 flex justify-between items-center">
          <Image src="/logo.svg" width={168} height={27} alt="logo" />
          <div className="flex px-4 py-1.5 bg-stone-50 w-[662px]">
            <input
              type="text"
              className="bg-stone-50 font-sfpro font-normal text-xs flex-1 tracking-tight"
              placeholder="Cari parfum kesukaanmu"
            />
            <Image src="/icon/search.svg" width={20} height={20} alt="search" />
          </div>
          <div className="flex gap-4">
            {!auth.user ? (
              <>
                <Link href="/login">
                  <ButtonSecondary>MASUK</ButtonSecondary>
                </Link>
                <Link href="/register">
                  <ButtonPrimary>DAFTAR</ButtonPrimary>
                </Link>
              </>
            ) : (
              <ButtonSecondary onClick={auth.logout}>LOGOUT</ButtonSecondary>
            )}
          </div>
        </nav>
      </header>
      <div className="max-w-[1366px] w-full pt-[70px]">{children}</div>
      <footer className="flex w-full justify-start h-[408px] px-24 ">
        <div className="max-w-[1366px] flex pt-20">
          <div className="w-[262px] flex flex-col items-center">
            <Image
              src="/logo.svg"
              width={168}
              height={27}
              alt="logo"
              className="mb-11"
            />
            <p className="opacity-50 text-center text-stone-900 text-xs font-normal font-sfpro leading-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              commodo in vestibulum, sed dapibus tristique nullam.
            </p>
            <div className="flex gap-5 mt-16">
              <Image
                width={20}
                height={20}
                src="/icon/facebook.svg"
                alt="facebook"
              />
              <Image
                width={20}
                height={20}
                src="/icon/twitter.svg"
                alt="twitter"
              />
              <Image
                width={20}
                height={20}
                src="/icon/instagram.svg"
                alt="instagram"
              />
            </div>
          </div>
          <div className="flex gap-20 ml-36">
            <div className="flex flex-col gap-4">
              <h5 className="mb-4 text-stone-900 text-lg font-normal">
                Layanan
              </h5>
              <a href="" className="font-sfpro text-xs tracking-widest">
                TANYA JAWAB
              </a>
              <a href="" className="font-sfpro text-xs tracking-widest">
                HUBUNGI KAMI
              </a>
              <a href="" className="font-sfpro text-xs tracking-widest">
                CARA BERJUALAN
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="mb-4 text-stone-900 text-lg font-normal">
                Tentang Kami
              </h5>
              <a href="" className="font-sfpro text-xs tracking-widest">
                ABOUT US
              </a>
              <a href="" className="font-sfpro text-xs tracking-widest">
                KARIR
              </a>
              <a href="" className="font-sfpro text-xs tracking-widest">
                BLOG
              </a>
              <a href="" className="font-sfpro text-xs tracking-widest">
                KEBIJAKAN PRIVASI
              </a>
              <a href="" className="font-sfpro text-xs tracking-widest">
                SYARAT DAN KETENTUAN
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="mb-4 text-stone-900 text-lg font-normal">Mitra</h5>
              <a href="" className="font-sfpro text-xs tracking-widest">
                SUPPLIER
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default MainLayout
