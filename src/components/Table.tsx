import { FC } from 'react'

interface Item {
  no: string | number //unique for better
  [key: string]: any
}

interface Props {
  readonly items: Item[]
  readonly header: string[]
}

const Table: FC<Props> = ({ header, items }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {header.map((v) => (
            <th
              key={v}
              className="first:pl-5 last:pr-5 px-3 py-3 bg-white font-normal font-sfpro"
            >
              {v}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((v) => (
          <tr key={v.no} className="even:bg-white">
            {Object.values(v).map((value) => (
              // eslint-disable-next-line react/jsx-key
              <td className="first:pl-5 last:pr-5 px-3 py-3 font-normal text-center font-sfpro ">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
