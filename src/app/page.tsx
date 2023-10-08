'use client'
import MainLayout from '@/components/MainLayout'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Carousel from './Carousel'
import ProductCard from '@/components/ProductCard'
import useGetProduct from '@/queries/product/useGetProduct'
import Slider from 'react-slick'
import Image from 'next/image'

export default function Home() {
  const { data } = useGetProduct({ status: 'active' })
  return (
    <MainLayout>
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-[1006px]">
          <Carousel />

          <div className="mt-8">
            <h1 className="text-stone-900 text-2xl font-bold">Terbaru</h1>
            <Slider
              slidesPerRow={1}
              slidesToScroll={1}
              slidesToShow={5}
              infinite
              nextArrow={
                <Image width={16} height={33} alt="next" src="/next.svg" />
              }
              prevArrow={
                <Image width={16} height={33} alt="next" src="/prev.svg" />
              }
            >
              {data?.rows.map(({ id, image, name, price }) => (
                <div key={id}>
                  <ProductCard image={image} name={name} price={price} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="mt-8">
            <h1 className="text-stone-900 text-2xl font-bold">
              Produk Tersedia
            </h1>
            <div className="grid grid-cols-5">
              {data?.rows.map(({ id, image, name, price }) => (
                <ProductCard key={id} image={image} name={name} price={price} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
