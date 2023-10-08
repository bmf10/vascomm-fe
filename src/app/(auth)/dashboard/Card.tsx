import { FC } from 'react'

interface Props {
  readonly title: string
  readonly value: string
  readonly unit: string
}

const Card: FC<Props> = ({ title, value, unit }) => {
  return (
    <div className="flex-1 bg-gradient-to-l from-[#C2D6FF] to-[#ADC9FF] rounded-2xl shadow p-7 relative">
      <h2 className="text-slate-500 text-sm font-normal font-sfpro mb-1.5">
        {title}
      </h2>
      <p className="text-blue-950 text-2xl font-normal leading-7 font-sfpro">
        {value}
        <span className="text-blue-950 text-base font-normal font-sfpro leading-tight ml-1.5 ">
          {unit}
        </span>
      </p>
      {/* background */}
      <div className="w-[55px] h-[62px] bg-white opacity-20 absolute rounded-full -right-[calc(55px/2)] bottom-0"></div>
      <div className="w-[55px] h-[62px] bg-white opacity-20 absolute rounded-full -right-0 -bottom-[25px]"></div>
      {/* background */}
    </div>
  )
}

export default Card
