'use client'
import ButtonPrimary from '@/components/ButtonPrimary'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import usePostUser from '@/queries/auth/usePostRegister'
import usePatchUser from '@/queries/user/usePatchUser'
import { User } from '@/types'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface Props {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly edit?: User
  readonly onSuccess: () => void
}

interface Values {
  readonly name: string
  readonly email: string
  readonly phone: string
}

const FormModal: FC<Props> = ({ onClose, isOpen, edit, onSuccess }) => {
  const {
    mutate: mutatePost,
    isLoading: postIsloading,
    isSuccess: postIsSuccess,
    reset: resetPost,
  } = usePostUser()
  const {
    mutate: mutatePatch,
    isLoading: patchIsLoading,
    isSuccess: patchIsSuccess,
    reset: resetPatch,
  } = usePatchUser()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset: resetForm,
    setValue,
  } = useForm<Values>()

  const onSubmit = (values: Values) => {
    if (edit) {
      mutatePatch({ id: edit.id, ...values })
    } else {
      mutatePost(values)
    }
  }

  useEffect(() => {
    if (postIsSuccess || patchIsSuccess) {
      onClose()
      onSuccess()
      resetPost()
      resetForm()
      resetPatch()

      if (edit) {
        toast.success('Berhasil mengubah user')
      } else {
        toast.success('Berhasil menambahkan user')
      }
    }
  }, [
    onClose,
    resetPatch,
    resetForm,
    postIsSuccess,
    patchIsSuccess,
    edit,
    onSuccess,
    resetPost,
  ])

  useEffect(() => {
    if (edit) {
      setValue('name', edit.name)
      setValue('email', edit.email)
      setValue('phone', edit.phone)
    } else {
      setValue('name', '')
      setValue('email', '')
      setValue('phone', '')
    }
  }, [edit, setValue])

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={edit ? 'Ubah Data User' : 'Tambah User'}
      size="small"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nama"
          inputProps={{
            placeholder: 'Masukan Nama',
            ...register('name', { required: 'Nama dibutuhkan' }),
          }}
          error={errors.name?.message}
        />
        <Input
          label="Email"
          className="mt-4"
          inputProps={{
            placeholder: 'Contoh: admin@gmail.com',
            type: 'email',
            ...register('email', { required: 'Email dibutuhkan' }),
          }}
          error={errors.email?.message}
        />
        <Input
          className="mt-4"
          label="Nomor Telpon"
          inputProps={{
            placeholder: 'Contoh: 081234567890',
            type: 'tel',
            ...register('phone', { required: 'Phone dibutuhkan' }),
          }}
          error={errors.phone?.message}
        />
        <ButtonPrimary
          className="w-full mt-8 h-11"
          disabled={postIsloading || patchIsLoading}
        >
          SIMPAN
        </ButtonPrimary>
      </form>
    </Modal>
  )
}

export default FormModal
