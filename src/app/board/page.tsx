import Link from 'next/link';
import BoardTable from '@/src/components/BoardTable';
import { getServerSession } from 'next-auth';

export default async function Board() {
  const userInfo = await getServerSession();
  return (
    <main className='min-h-[80vh] max-w-5xl mx-auto'>
      <BoardTable />
      {userInfo?.user && (
        <button className='float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3 mb-3'>
          <Link href={'board/write'}>글쓰기</Link>
        </button>
      )}
    </main>
  );
}
