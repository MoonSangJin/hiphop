'use client';

import { useState } from 'react';
import Login from './Login';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import Image from 'next/image';

interface UserInfo {
  userInfo: Session | null;
}

export default function Navbar({ userInfo }: UserInfo) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [OAuthMenuOpen, setOAuthMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const toggleOAuthMenu = () => {
    //로그아웃 상태이면 OAuthMenuOpen true, 로그인 상태면 OAuthMenuOpen false
    setOAuthMenuOpen(!OAuthMenuOpen);
  };
  const preventEventBubbling = (e: { stopPropagation: () => void }) => {
    // 이벤트 전파를 중지하여 검정색 화면 클릭만 toggleOAuthMenu가 호출되도록 합니다.
    e.stopPropagation();
  };

  return (
    <>
      {OAuthMenuOpen && (
        <Login {...{ toggleOAuthMenu, preventEventBubbling }} />
      )}
      {/*----------------------------------------------------------PC NavBar---------------------------------------------------------- */}
      <div
        className={`transition-opacity duration-500 sticky top-0 z-10 ${
          mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <nav className='px-4 flex justify-between md:justify-around py-5 bg-white/80 backdrop-blur-md shadow-md w-full'>
          <div className='flex items-center'>
            <a href='/' className='cursor-pointer'>
              <h1 className='text-2xl font-extrabold text-blue-600 uppercase'>
                hiphopeat
              </h1>
            </a>
          </div>
          <div className='hidden lg:flex lg:items-center lg:space-x-10'>
            <a
              href='/news'
              className='font-semibold flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300'
            >
              뉴스
            </a>

            <a
              href='/board'
              className='font-semibold flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300'
            >
              커뮤니티
            </a>

            <a
              href='/video'
              className='font-semibold flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300'
            >
              비디오
            </a>

            <a
              href='/open_mic'
              className='font-semibold flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300'
            >
              오픈 마이크
            </a>

            <a
              href='/introduce'
              className='font-semibold flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300'
            >
              About Us
            </a>
          </div>
          <div className='flex items-center space-x-5'>
            <div className='hidden md:flex md:items-center '>
              {userInfo && (
                <Image
                  src={userInfo.user.image}
                  width={25}
                  height={25}
                  alt='userImage'
                />
              )}
              <span className='text-gray-700 font-bold md:ml-2'>
                {userInfo?.user?.name}
              </span>
            </div>
            <a
              onClick={userInfo ? () => signOut() : () => toggleOAuthMenu()}
              className='flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold hover:text-blue-600'
            >
              <svg
                className='fill-current h-5 w-5 md:mr-2 mr-1 mt-0.5'
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z' />
              </svg>
              {userInfo ? <span>Logout</span> : <span>Login</span>}
            </a>
            <div className='lg:hidden'>
              <button
                onClick={toggleMobileMenu}
                className='navbar-burger flex items-center text-gray-600 p-2.5'
              >
                <svg
                  className='block w-4 h-4 fill-current'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Mobile menu</title>
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/*----------------------------------------------------------Mobile NavBar---------------------------------------------------------- */}
      <div
        className={`gnb_wrap block fixed top-0 left-0 right-0 bottom-0 z-20 py-16 bg-white transition-opacity duration-500 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button onClick={toggleMobileMenu} className='fixed top-5 right-5'>
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
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        <nav id='gnb' className='gnb h-full'>
          <ul className='flex flex-col items-center space-y-10 text-lg'>
            <li>
              <a
                href='/news'
                className='font-semibold flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300'
              >
                뉴스
              </a>
            </li>
            <li>
              <a
                href='/board'
                className='font-semibold flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300'
              >
                커뮤니티
              </a>
            </li>
            <li>
              <a
                href='/video'
                className='font-semibold flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300'
              >
                비디오
              </a>
            </li>
            <li>
              <a
                href='/open_mic'
                className='font-semibold flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300'
              >
                오픈 마이크
              </a>
            </li>
            <li>
              <a
                href='/introduce'
                className='font-semibold flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300'
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className='footer text-center uppercase font-extrabold text-2xl'>
          hiphopeat
        </div>
      </div>
    </>
  );
}
