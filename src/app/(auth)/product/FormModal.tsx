'use client'
import ButtonPrimary from '@/components/ButtonPrimary'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import usePatchProduct from '@/queries/product/usePatchProduct'
import usePostProduct from '@/queries/product/usePostProduct'
import { Product } from '@/types'
import { convertBase64 } from '@/utils/file'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface Props {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly edit?: Product
  readonly onSuccess: () => void
}

interface Values {
  readonly name: string
  readonly image?: File | string
  readonly price: number | string
}

const FormModal: FC<Props> = ({ onClose, isOpen, edit, onSuccess }) => {
  const {
    mutate: mutatePost,
    isLoading: postIsloading,
    isSuccess: postIsSuccess,
    reset: resetPost,
  } = usePostProduct()
  const {
    mutate: mutatePatch,
    isLoading: patchIsLoading,
    isSuccess: patchIsSuccess,
    reset: resetPatch,
  } = usePatchProduct()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset: resetForm,
    setValue,
    clearErrors,
  } = useForm<Values>()

  const onSubmit = async (values: Values) => {
    let base64

    if (typeof values.image === 'object') {
      base64 = await convertBase64(values.image[0])
    }

    if (edit) {
      mutatePatch({ id: edit.id, ...values, image: base64 })
    } else {
      mutatePost({ ...values, image: base64! })
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
      setValue('price', edit.price)
      setValue('image', edit.image)
      clearErrors()
    } else {
      setValue('name', '')
      setValue('price', '')
      setValue('image', '')
    }
  }, [clearErrors, edit, setValue])

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={edit ? 'Ubah Data Produk' : 'Tambah Produk'}
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
          label="Harga"
          className="mt-4"
          inputProps={{
            placeholder: 'Contoh: 10000',
            type: 'number',
            ...register('price', { required: 'Harga dibutuhkan' }),
          }}
          error={errors.price?.message}
        />
        <Input
          className="mt-4"
          label="Gambar"
          inputProps={{
            type: 'file',
            multiple: false,
            ...register('image', {
              required: !edit ? 'Gambar dibutuhkan' : false,
            }),
          }}
          error={errors.image?.message}
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
