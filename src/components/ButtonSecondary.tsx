import { FC, ReactNode } from 'react'

interface Props {
  readonly children: ReactNode
  readonly onClick?: () => void
  readonly disabled?: boolean
}

const ButtonSecondary: FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 border border-blue-500 text-blue-500 text-sm font-bold font-sfpro tracking-widest disabled:brightness-95"
    >
      {children}
    </button>
  )
}

export default ButtonSecondary
