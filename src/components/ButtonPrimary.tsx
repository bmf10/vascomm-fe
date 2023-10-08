import clsx from 'clsx'
import { FC, ReactNode } from 'react'

interface Props {
  readonly children: ReactNode
  readonly className?: string
  readonly onClick?: () => void
  readonly disabled?: boolean
}

const ButtonPrimary: FC<Props> = ({
  children,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'px-4 py-2 bg-primary text-white text-sm font-bold font-sfpro tracking-widest disabled:brightness-95 hover:brightness-110',
        { 'brightness-90': disabled },
        className
      )}
    >
      {children}
    </button>
  )
}

export default ButtonPrimary
