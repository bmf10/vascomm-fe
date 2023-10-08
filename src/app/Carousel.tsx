import clsx from 'clsx'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'

const SLIDER_DATA = ['/banner.png', '/banner.png', '/banner.png']

const Carousel = () => {
  const sliderRef = useRef<Slider | null>(null)
  const [active, setActive] = useState(0)
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setActive(next),
  }

  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        {SLIDER_DATA.map((v, i) => (
          <div key={i}>
            <Image src={v} width={1006} height={331} alt="banner" />
          </div>
        ))}
      </Slider>
      <div className="flex items-center gap-2 mt-4">
        <div>
          <Image
            src="/icon/left.svg"
            width={16}
            height={16}
            alt="left"
            className="w-[18px] h-[18px]"
            onClick={() => sliderRef.current?.slickPrev()}
          />
        </div>
        {SLIDER_DATA.map((_, i) => (
          <div
            onClick={() => sliderRef.current?.slickGoTo(i)}
            className={clsx('w-2.5 h-2.5  rounded-full', {
              'bg-[#A29B91]': i === active,
              'bg-[#F9F9F9]': i !== active,
            })}
            key={i}
          />
        ))}
        <div>
          <Image
            src="/icon/right.svg"
            width={16}
            height={16}
            alt="left"
            className="w-[18px] h-[18px]"
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
      </div>
    </>
  )
}

export default Carousel
