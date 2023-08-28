import Swiper from '../components/Swiper';
import BoardTable from '../components/BoardTable';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Swiper />
      <div className='container flex flex-col items-center mx-auto mt-9 space-y-9'>
        <section className='w-full h-56 festivalInfo'>
          <img
            className='w-full h-full object-fill rounded-xl'
            src='/festival.jpg'
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
