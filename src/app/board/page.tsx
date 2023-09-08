import Link from 'next/link';
import axios from 'axios';
import BoardTable from '@/src/components/BoardTable';

interface Post {
  id: number;
  title: string;
  content: string;
}

async function getData() {
  const { data } = await axios.get<Post[]>(`${process.env.URL}/api/posts`);
  return data;
}

export default async function Board() {
  const posts = await getData();
  return (
    <>
      <BoardTable />
      <button className='bg-blue-400 float-right rounded w-20 m-2'>
        <Link href={`board/write`}>글쓰기</Link>
      </button>
    </>
  );
}
