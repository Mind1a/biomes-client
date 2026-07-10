"use client"
import Image from "next/image"
import { useState } from "react"
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

type  ImageItem = {
  id: string | number;
  src: string;
  alt?: string;
}

type BiomeData = {
  figureTitle: string;
  description: React.ReactNode;
  imageArr: ImageItem[];
}

type BiomesDetailViewProps = {
  data: BiomeData;
  icon: string;
  badge: string;
}

const BiomesDetailView = ({ data, icon, badge }: BiomesDetailViewProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='py-6 px-4 md:px-8  bg-white rounded-3xl '>
        <div className="flex items-center gap-2 mb-6">
          <Image width={18} height={18} src={icon} alt="" className="object-cover"/>
          <span className="text-[18px] leading-6.5 font-bold text-[#171717]">
            {badge}
          </span>
        </div>
      <div className="flex flex-col lg:flex-row-reverse xl:flex-col gap-6">
        <div className="lg:max-w-116.5 xl:max-w-full">

          <div className="relative">
            <span className="absolute py-1.5 px-3 bg-[#008645] z-50 rounded-full text-white top-5.5 left-7 text-[12px] font-medium select-none">
              სურ. {activeIndex + 1}
            </span>

            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs]}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="mySwiper2 h-81.5 md:h-110 mb-3 rounded-3xl overflow-hidden"
            >
              {data.imageArr.map((img) => (
                <SwiperSlide key={img.id} className="relative w-full h-full">
                  <Image fill src={img.src} alt={img.alt || ""} className="object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper h-14 md:h-18"
            >
              {data.imageArr.map((img) => (
                <SwiperSlide key={img.id} className="border border-[#008645]/20 aria-selected:border-[#008645] rounded-2xl relative overflow-hidden cursor-pointer">
                  <Image fill src={img.src} alt="" className="object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex  mt-4 gap-3.5">
            <h2 className="flex items-center gap-1 text-[#008645] text-[14px] font-bold">
              სურ. {activeIndex + 1} - <span className="text-[#6F7680] font-normal">{data.figureTitle}</span>
            </h2>

          </div>
        </div>
        <div className="xl:text-[16px] md:text-[14px] text-[12px] leading-5.5 md:leading-6 xl:leading-7 text-black font-normal">
          {data.description}
        </div>
     </div>
    </div>
  )
}

export default BiomesDetailView
