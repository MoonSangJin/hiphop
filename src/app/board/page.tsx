import Link from 'next/link';
import BoardTable from '@/src/components/BoardTable';
import { getServerSession } from 'next-auth';
import axios from 'axios';
import { Post } from '../api/posts/route';

const getPosts = async () => {
  const { data } = await axios.get<Post[]>(
    `${process.env.NEXT_PUBLIC_URL}/api/posts`
  );
  return data;
};

export default async function Board() {
  const userInfo = await getServerSession();
  const initialData = await getPosts();
  return (
    <main className='min-h-[80vh] max-w-5xl mx-auto'>
      <BoardTable {...{ initialData }} />
      {userInfo?.user && (
        <button className='float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3 mb-3'>
          <Link href={'board/write'}>글쓰기</Link>
        </button>
      )}
    </main>
  );
}
