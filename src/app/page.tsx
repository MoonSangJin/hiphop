import Swiper from '../components/Swiper';
import BoardTable from '../components/BoardTable';
import Image from 'next/image';
import { MOCK_LATEST_THNUMBNAIL_DATA } from '../utils/mock';

export default function Home() {
  return (
    <main>
      <Swiper />
      <div className='container flex flex-col items-center mx-auto mt-9 space-y-9 px-5 lg:px-52'>
        <section className='w-full h-[7rem] md:h-[13rem] relative'>
          <Image
            alt='festivalInfo'
            fill={true}
            src='/festival.jpg'
            className='rounded-xl'
            placeholder='blur'
            blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' // 추가
          />
        </section>

        <section className='w-full flex flex-col items-center mt-5'>
          <span className='font-semibold text-xl uppercase'>latest</span>
          <ul className='w-full flex flex-wrap justify-between mt-5'>
            {MOCK_LATEST_THNUMBNAIL_DATA.map((i, index) => (
              <li key={index} className='w-1/2 lg:w-1/3 p-1.5 mb-1.5'>
                <a href={i.link}>
                  <div className='flex flex-col items-center border rounded-xl shadow-lg'>
                    <div className='relative w-full h-24 lg:h-44'>
                      <Image
                        src={i.url}
                        fill={true}
                        alt='latestImage'
                        className='rounded-t-xl'
                        placeholder='blur'
                        blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' // 추가
                      />
                    </div>
                    <div className='overflow-hidden font-extrabold text-sm text-center w-full h-10 lg:h-14 px-1.5 mt-3'>
                      {i.title}
                    </div>
                    <div className='text-slate-800 font-semibold text-xs'>
                      {i.category}
                    </div>
                    <div className='text-slate-500 text-[9px] mt-1.5 mb-4'>
                      {i.date}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className='w-full flex flex-col items-center mt-5'>
          <span className='font-semibold text-xl uppercase'>communtiy</span>
          <BoardTable />
        </section>
      </div>
    </main>
  );
}
