'use client'
import ButtonPrimary from '@/components/ButtonPrimary'
import Table from '@/components/Table'
import FormModal from './FormModal'
import { useState } from 'react'
import useGetUser from '@/queries/user/useGetUser'
import clsx from 'clsx'
import ActionButton from './ActionButton'
import usePatchUser from '@/queries/user/usePatchUser'
import { User } from '@/types'

const User = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [edit, setEdit] = useState<User>()
  const { data, refetch } = useGetUser()
  const { mutateAsync } = usePatchUser()

  const handleHide = async (value: User) => {
    await mutateAsync({
      id: value.id,
      status: value.status === 'active' ? 'inactive' : 'active',
    })
    refetch()
  }

  const handleClose = () => {
    setModal(false)
    setEdit(undefined)
  }

  const handleEdit = (user: User) => {
    setEdit(user)
    setModal(true)
  }

  const handleSuccessForm = () => {
    refetch()
  }

  return (
    <div className="p-7">
      <div className="flex justify-between mb-8">
        <h1 className="text-black text-lg font-normal font-sfpro">
          Manajemen User
        </h1>
        <ButtonPrimary onClick={() => setModal(true)}>
          TAMBAH USER
        </ButtonPrimary>
      </div>
      <Table
        items={
          data?.rows.map((row, i) => ({
            no: i + 1,
            name: row.name,
            email: row.email,
            phone: row.phone,
            status: (
              <div
                className={clsx(
                  ' rounded-xl  uppercase m-auto text-white font-semibold',
                  {
                    'bg-green-500': row.status == 'active',
                    'bg-red-500': row.status == 'inactive',
                  }
                )}
              >
                {row.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
              </div>
            ),
            action: (
              <ActionButton
                onEdit={() => handleEdit(row)}
                onHide={() => handleHide(row)}
              />
            ),
          })) || []
        }
        header={['No', 'Nama Lengkap', 'Email', 'No. Telepon', 'Status', '']}
      />
      <FormModal
        isOpen={modal}
        onClose={handleClose}
        edit={edit}
        onSuccess={handleSuccessForm}
      />
    </div>
  )
}

export default User
