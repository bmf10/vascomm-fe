'use client'
import ButtonPrimary from '@/components/ButtonPrimary'
import Table from '@/components/Table'
import FormModal from './FormModal'
import { useState } from 'react'

import clsx from 'clsx'
import ActionButton from './ActionButton'
import usePatchUser from '@/queries/user/usePatchUser'
import { Product } from '@/types'
import useGetProduct from '@/queries/product/useGetProduct'
import { numberFormatter } from '@/utils/number'
import usePatchProduct from '@/queries/product/usePatchProduct'

const User = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [edit, setEdit] = useState<Product>()
  const { data, refetch } = useGetProduct({})
  const { mutateAsync } = usePatchProduct()

  const handleHide = async (value: Product) => {
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

  const handleEdit = (product: Product) => {
    setEdit(product)
    setModal(true)
  }

  const handleSuccessForm = () => {
    refetch()
  }

  return (
    <div className="p-7">
      <div className="flex justify-between mb-8">
        <h1 className="text-black text-lg font-normal font-sfpro">
          Manajemen Produk
        </h1>
        <ButtonPrimary onClick={() => setModal(true)}>
          TAMBAH PRODUK
        </ButtonPrimary>
      </div>
      <Table
        items={
          data?.rows.map((row, i) => ({
            no: i + 1,
            name: row.name,
            price: numberFormatter(row.price),
            image: (
              <img
                className="w-12 h-12 m-auto"
                src={row.image}
                alt={row.name}
              />
            ),
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
        header={['No', 'Nama Produk', 'Harga', 'Gambar', 'Status', '']}
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
