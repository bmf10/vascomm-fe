'use client'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react'

interface Props {
  readonly inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
  readonly label?: string
  readonly labelClassName?: string
  readonly helper?: string
  readonly error?: string
  readonly className?: string
  readonly inputClassName?: string
  readonly icon?: ReactNode
}

const Input: FC<Props> = ({
  inputProps,
  label,
  labelClassName,
  error,
  helper,
  className,
  inputClassName,
  icon,
}: Props) => {
  return (
    <div className={clsx(`overflow-hidden transition-all`, className)}>
      {label ? (
        <label
          className={clsx(
            `text-neutral-500 text-xs mb-2 inline-block font-sfpro`,
            labelClassName
          )}
        >
          {label}
        </label>
      ) : undefined}

      <div
        className={clsx('border border-gray-300 flex items-center', {
          'pl-3': !!icon,
        })}
      >
        {icon}
        <input
          {...inputProps}
          className={clsx(
            `appearance-none w-full py-3 text-sm font-sfpro text-neutral-500 leading-tight focus:outline-none focus:shadow-outline`,
            {
              'border-red-500': error,
              'px-4': !icon,
              'pl-2 pr-4': !!icon,
            },
            inputClassName
          )}
        />
      </div>
      <div className="flex flex-col">
        {helper ? (
          <span className="text-sm text-gray-500 mt-2 font-sfpro">
            {helper}
          </span>
        ) : undefined}
        <Transition
          show={!!error}
          enter="transition duration-100"
          enterFrom="translate-y-7"
          enterTo="translate-y-0"
          leave="transition duration-100"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-7"
        >
          <span className="text-xs text-red-600 font-sfpro">{error}</span>
        </Transition>
      </div>
    </div>
  )
}

export default Input
