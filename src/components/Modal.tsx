import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { FC, Fragment, ReactNode } from 'react'

interface Props {
  readonly isOpen: boolean
  readonly onClose: (value: boolean) => void
  readonly children: ReactNode
  readonly size?: 'small' | 'large'
  readonly title?: string
  readonly fullscreen?: boolean //on mobile
  readonly containerClassName?: string
}

const Modal: FC<Props> = ({
  children,
  isOpen,
  onClose,
  size = 'large',
  title,
  fullscreen = false,
  containerClassName,
}: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div
            className={clsx(
              'flex min-h-full items-center justify-center text-center md:p-4',
              { 'p-4': !fullscreen }
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  ` w-full transform bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all relative overflow-auto md:h-auto`,
                  {
                    'md:max-w-2xl': size === 'large',
                    'md:max-w-md': size === 'small',
                    'h-screen': fullscreen,
                  },
                  containerClassName
                )}
              >
                <div
                  className={clsx(`flex justify-center items-center `, {
                    'mb-4': !!title,
                  })}
                >
                  <h4 className="text-neutral-700 text-lg font-medium font-sfpro">
                    {title}
                  </h4>
                </div>
                <button
                  onClick={() => onClose(!isOpen)}
                  className="absolute top-4 right-4 block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.75 5.25L5.25 18.75"
                      stroke="#3E3E3E"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.75 18.75L5.25 5.25"
                      stroke="#3E3E3E"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
