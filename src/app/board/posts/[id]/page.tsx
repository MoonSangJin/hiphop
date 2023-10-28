'use client';

import axios from 'axios';
import Link from 'next/link';
import { Post } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import sanitizeHtml from 'sanitize-html';

import 'react-quill/dist/quill.snow.css';

const fetchClickPostData = async (id: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`
  );
  return data;
};

export default function PostDetail({ params }: { params: { id: string } }) {
  const { data, isLoading } = useQuery<Post>({
    queryKey: ['stream-hydrate-unique-post'],
    queryFn: () => fetchClickPostData(params.id),
  });

  let createdAt = data?.createdAt;
  if (!createdAt) {
    createdAt = new Date();
  }

  //xss공격 막기 위함
  const cleanedString = sanitizeHtml(data?.content || '', {
    allowedTags,
    allowedAttributes,
  });

  if (isLoading) {
    // 로딩 중일 때 보여줄 UI
    return <div>Loading...</div>;
  }

  return (
    <main className='min-h-[80vh] max-w-5xl mx-auto'>
      <div className='text-2xl font-semibold'> {data?.title}</div>
      <div>{data?.authorId}</div>
      <div>{calculateTimeAgo(createdAt)}</div>
      <div className='text-xl font-semibold mt-5 mb-1.5'>내용</div>
      <div
        className='ql-editor'
        dangerouslySetInnerHTML={{ __html: cleanedString }}
      />
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
        <Link href={'/board'}>뒤로가기</Link>
      </button>
    </main>
  );
}

function calculateTimeAgo(createdAt: Date) {
  const now = new Date();
  const createdDate = new Date(createdAt);

  const timeDifference = now.getTime() - createdDate.getTime();

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));

  if (minutes < 60) {
    return `${minutes}분 전`;
  } else if (hours < 24) {
    return `${hours}시간 전`;
  } else {
    return `${createdDate.toLocaleDateString()} ${createdDate.toLocaleTimeString()}`;
  }
}

const allowedTags = [
  // ... 다른 허용할 태그
  'a',
  'abbr',
  'acronym',
  'b',
  'blockquote',
  'code',
  'em',
  'i',
  'li',
  'ol',
  'strong',
  'ul',
  'p',
  'br',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hr',
  'mark',
  'pre',
  'q',
  'sub',
  'sup',
];

const allowedAttributes = {
  // 허용할 클래스 속성 추가
  span: ['class'],
  p: ['class'],
};
