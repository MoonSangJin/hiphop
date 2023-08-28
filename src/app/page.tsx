import Swiper from '../components/Swiper';
import BoardTable from '../components/BoardTable';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Swiper />
      <div className='container flex flex-col items-center mx-auto mt-9 space-y-9'>
        <section className='w-3/4 h-[7rem] lg:w-full lg:h-[15rem] relative'>
          <Image
            alt='festivalInfo'
            fill={true}
            src='/festival.jpg'
            className='rounded-xl'
          />
        </section>
        <section className='w-full flex flex-col items-center mt-5'>
          <span className='font-semibold text-xl'>COMMUNITY</span>
          <BoardTable />
        </section>
        <section>latest-news,video</section>
      </div>
    </main>
  );
}
