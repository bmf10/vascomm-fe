'use client'
import Input from '@/components/Input'
import ButtonPrimary from '@/components/ButtonPrimary'
import usePostUser from '@/queries/auth/usePostRegister'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Values {
  readonly name: string
  readonly email: string
  readonly phone: string
}

const RegisterPage = () => {
  const { mutate, isSuccess, isLoading } = usePostUser()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Values>()
  const router = useRouter()

  const onSubmit = (values: Values) => {
    mutate(values)
  }

  useEffect(() => {
    if (isSuccess) router.push('/login')
  }, [isSuccess, router])

  return (
    <div className="w-[367px]">
      <h2 className="text-neutral-700 text-2xl font-medium font-sfpro mb-2">
        Selamat Datang Admin
      </h2>
      <p className="text-neutral-400 text-xs font-normal font-sfpro mb-8">
        Silahkan masukkan email atau nomor telepon dan password Anda untuk mulai
        menggunakan aplikasi
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nama"
          inputProps={{
            placeholder: 'Masukan Nama',
            ...register('name', { required: 'Nama dibutuhkan' }),
          }}
        />
        <Input
          label="Email"
          className="mt-4"
          inputProps={{
            placeholder: 'Contoh: admin@gmail.com',
            type: 'email',
            ...register('email', { required: 'Email dibutuhkan' }),
          }}
        />
        <Input
          className="mt-4"
          label="Nomor Telpon"
          inputProps={{
            placeholder: 'Contoh: 081234567890',
            type: 'tel',
            ...register('phone', { required: 'Phone dibutuhkan' }),
          }}
        />
        <ButtonPrimary className="w-full mt-8 h-11" disabled={isLoading}>
          DAFTAR
        </ButtonPrimary>
      </form>
    </div>
  )
}

export default RegisterPage
