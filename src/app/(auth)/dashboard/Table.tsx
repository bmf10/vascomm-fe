const Table = () => {
  return (
    <div className="mt-8 bg-white rounded-xl px-7 py-5 font-sfpro">
      <table className="w-full">
        <thead className="bg-primary text-white">
          <tr>
            <td className="p-3 rounded-l-md">Produk</td>
            <td className="p-3 text-center">Tanggal Dibuat</td>
            <td className="p-3 rounded-r-md text-center">Harga (Rp)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pl-3 py-2">Microsoft Surface 7</td>
            <td className="text-zinc-400 text-sm font-normal text-center py-2">
              12 Mei 2023
            </td>
            <td className="text-center pr-3 py-2">Rp 1.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
