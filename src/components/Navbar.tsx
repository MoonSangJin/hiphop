export default function Navbar() {
  return (
    <nav className='flex justify-around py-5 bg-white/80 backdrop-blur-md shadow-md w-full sticky top-0 z-10'>
      <div className='flex items-center'>
        <a
          href='/'
          className='cursor-pointer'
        >
          <h3 className='text-2xl font-extrabold text-blue-600'>HIPHOPEAT</h3>
        </a>
      </div>
      <div className='flex items-center space-x-10'>
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
        <a className='flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold hover:text-blue-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='fill-current h-5 w-5 mr-2 mt-0.5'
          >
            <path
              fillRule='evenodd'
              d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
              clipRule='evenodd'
            />
          </svg>
          검색
        </a>

        <a className='flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold hover:text-blue-600'>
          <svg
            className='fill-current h-5 w-5 mr-2 mt-0.5'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z' />
          </svg>
          Login
        </a>
      </div>
    </nav>
  );
}
