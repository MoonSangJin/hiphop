'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MOCK_SWIPER_DATA } from '../utils/mock';
import Image from 'next/image';
import '../utils/swiper.css';

export default function SwiperContainer() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {MOCK_SWIPER_DATA.map((i, index) => (
          <SwiperSlide key={index}>
            <a href={i.link} target='_blank'>
              <div className='h-full absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent'>
                <div className='absolute bottom-24 md:bottom-28 font-black text-blue-500 text-[1rem] md:text-[1.5rem]text-white pl-[1.5rem] md:pl-[5rem]'>
                  {i.category}
                </div>
                <div className='truncate absolute bottom-14 font-black text-white text-[1.5rem] md:text-[2.5rem] max-w-sm md:max-w-full pl-[1.5rem] md:pl-[5rem]'>
                  {i.title}
                </div>
              </div>
              <div className='relative w-full h-[22rem] md:h-[32rem] lg:h-[42rem]'>
                <Image
                  priority={true}
                  src={i.url}
                  alt={`Image ${index + 1}`}
                  fill={true}
                  sizes='100%'
                  placeholder='blur'
                  blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' // 추가
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
