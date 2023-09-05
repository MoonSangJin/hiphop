'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MOCK_THNUMBNAIL_DATA } from '../utils/mock';
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
        {MOCK_THNUMBNAIL_DATA.map((i, index) => (
          <SwiperSlide key={index}>
            <div className='relative w-full h-[22rem] md:h-[32rem] lg:h-[42rem]'>
              <Image
                priority={true}
                src={i}
                alt={`Image ${index + 1}`}
                fill={true}
                sizes='100%'
                placeholder='blur'
                blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' // 추가
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
