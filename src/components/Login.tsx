'use client';

import React from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

interface SignInProps {
  toggleOAuthMenu: () => void;
  preventEventBubbling: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const loginWithGoogle = async () => {
  try {
    await signIn('google');
  } catch (error) {
    console.error(error);
  }
};

export default function Login({
  toggleOAuthMenu,
  preventEventBubbling,
}: SignInProps) {
  return (
    <div onClick={toggleOAuthMenu}>
      <div className='fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center'>
        <div className='container m-auto px-6'>
          <div
            onClick={preventEventBubbling}
            className='rounded-xl bg-white shadow-xl p-10'
          >
            <h2 className='mb-8 text-2xl text-center uppercase font-extrabold text-blue-600 '>
              hiphopeat
            </h2>
            <button
              onClick={loginWithGoogle}
              className='group w-full h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'
            >
              <div className='relative flex items-center space-x-3 justify-center'>
                <Image
                  priority={true}
                  src='https://www.svgrepo.com/show/475656/google-color.svg'
                  width={20}
                  height={20}
                  alt='google logo'
                />
                <span className='block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
                  Continue with Google
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
