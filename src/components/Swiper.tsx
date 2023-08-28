'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MOCK_THNUMBNAIL_DATA } from '../util/mock';
import Image from 'next/image';

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
            <div className='lg:w-full lg:h-[40rem] w-96 h-[10rem]'>
              <Image src={i} alt={`Image ${index + 1}`} fill={true} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
