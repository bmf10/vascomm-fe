import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex px-6 py-4 border-b justify-between">
      <Image src="/logo.svg" width={168} height={27} alt="logo" />
      <div className="flex gap-4 items-center">
        <div className="flex flex-col">
          <span className="text-primary font-sfpro text-[10px] text-right">
            Hallo Admin,
          </span>
          <span className="text-sm font-sfpro text-right">Aden S. Putra</span>
        </div>
        <div className="w-10 h-10 bg-primary rounded-full flex justify-center items-center text-xl text-white font-sfpro">
          A
        </div>
      </div>
    </header>
  )
}

export default Header
