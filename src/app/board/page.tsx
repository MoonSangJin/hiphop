'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import BoardTable from '@/src/components/BoardTable';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Board() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>('/api/posts').then((response) => {
      console.log(response.data);
      setPosts([...response.data]);
    });
  }, []);

  if (posts.length === 0) {
    return <div className='w-full h-max'>Loading...</div>;
  }

  return (
    <>
      <h2>게시판 글 목록</h2>
      <div>
        <BoardTable />
        <button className='bg-blue-400 float-right rounded w-20 m-2'>
          <Link href={`board/write`}>글쓰기</Link>
        </button>
      </div>
    </>
  );
}
