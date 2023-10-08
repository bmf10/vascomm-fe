'use client'
import Input from '@/components/Input'
import ButtonPrimary from '@/components/ButtonPrimary'
import usePostLogin from '@/queries/auth/usePostLogin'
import { useForm } from 'react-hook-form'
import { setCookie } from 'react-use-cookie'
import { redirect, useRouter } from 'next/navigation'
import { useAuth } from '@/context/Auth'

interface Values {
  readonly email: string
  readonly password: string
}

const LoginPage = () => {
  const auth = useAuth()
  const router = useRouter()
  const { mutateAsync } = usePostLogin()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Values>()

  const onSubmit = async (values: Values) => {
    const response = await mutateAsync(values)
    setCookie('@token', response.data.data.token)
    auth.refetch()
  }

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
          label="Email"
          inputProps={{
            placeholder: 'Contoh: admin@gmail.com',
            ...register('email', { required: 'Email dibutuhkan' }),
          }}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          className="mt-4"
          inputProps={{
            placeholder: 'Masukkan passward',
            type: 'password',
            ...register('password', { required: 'Password dibutuhkan' }),
          }}
          error={errors.password?.message}
        />
        <ButtonPrimary className="w-full mt-8 h-11">MASUK</ButtonPrimary>
      </form>
    </div>
  )
}

export default LoginPage
