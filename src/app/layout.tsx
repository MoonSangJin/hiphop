import './globals.css';
import Navbar from '../components/Navbar';
import AuthSession from '../components/AuthSession';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import Providers from '../utils/provider';

export const metadata: Metadata = {
  title: 'HIPHOPEAT',
  description: '힙합과 R&B 커뮤니티',
  openGraph: {
    title: 'HIPHOPEAT',
    description: '힙합과 R&B 커뮤니티',
    url: 'https://hiphop-eight.vercel.app',
    siteName: 'HIPHOPEAT',
    images: {
      url: '/logo.png',
      width: 1800,
      height: 1600,
      alt: 'HIPHOPEAT Web',
    },
    locale: 'en_US',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //서버에서 getServerSession을 통해 미리 확인을 해야 Navbar가 초기에 로그인 된 상태일 경우 login 버튼이 안나옴
  const userInfo = await getServerSession();

  return (
    <html lang='en'>
      <body>
        <Providers>
          <AuthSession>
            <Navbar {...{ userInfo }} />
            {children}
            <footer className='w-full bg-stone-900 text-white flex flex-col items-center space-y-3 pb-5'>
              <div className='font-extrabold text-2xl mb-2 pt-5 uppercase'>
                hiphopeat
              </div>
              <div className='flex'>
                <a href='mailto:1128msj@gmail.com'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-7 h-7'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                    />
                  </svg>
                </a>

                <a href='https://github.com/MoonSangJin' target='_blank'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-7 h-7 ml-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
                    />
                  </svg>
                </a>

                <a
                  href='https://www.linkedin.com/in/sangjin-moon-570288208/'
                  target='_blank'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-7 h-7 ml-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
                    />
                  </svg>
                </a>
              </div>
            </footer>
          </AuthSession>
        </Providers>
      </body>
    </html>
  );
}
