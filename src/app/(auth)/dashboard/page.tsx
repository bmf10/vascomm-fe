import Card from './Card'
import Table from './Table'

const Dashboard = () => {
  return (
    <div className="p-7">
      <h1 className="text-black text-lg font-normal font-sfpro mb-8">
        Dashboard
      </h1>
      <div className="flex gap-5 ">
        <Card title="Jumlah User" value="100" unit="User" />
        <Card title="Jumlah User Aktif" value="100" unit="User" />
        <Card title="Jumlah Produk" value="100" unit="Produk" />
        <Card title="Jumlah Produk Aktif" value="100" unit="Produk" />
      </div>
      <Table />
    </div>
  )
}

export default Dashboard
