import { MOCK_VIDEO_DATA } from '@/src/utils/mock';
import Image from 'next/image';

//무한스크롤 구현 필요
export default function Video() {
  return (
    <main>
      <div className='container flex flex-col mx-auto px-5 md:px-20 lg:px-52'>
        <span className='uppercase text-center mt-10 font-semibold text-2xl'>
          new video
        </span>
        <ul className='video-section w-full flex flex-wrap'>
          {MOCK_VIDEO_DATA.map((i, index) => (
            <li
              key={index}
              className='w-full md:w-1/2 lg:w-1/3 p-7 transform transition duration-500 hover:scale-110'
            >
              <a href={i.videoUrl} target='_blank'>
                <div className='relative w-full h-44'>
                  <Image
                    src={i.thumbNails}
                    alt='thumbails'
                    fill={true}
                    sizes='100%'
                    placeholder='blur'
                    blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==' // 추가
                  />
                </div>
                <div className='truncate text-center font-extrabold text-sm mt-2'>
                  {i.title}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
