import { numberFormatter } from '@/utils/number'
import { FC } from 'react'

interface Props {
  readonly image: string
  readonly name: string
  readonly price: number
}

const ProductCard: FC<Props> = ({ image, name, price }) => {
  return (
    <div className="w-44 flex justify-center flex-col p-6 hover:drop-shadow-md transition-shadow">
      <img src={image} alt={`img-${name}`} />

      <h2 className="text-stone-900 text-sm font-bold mt-5">{name}</h2>
      <p className="text-blue-500 text-sm font-bold font-sfpro">
        {numberFormatter(price)}
      </p>
    </div>
  )
}

export default ProductCard
