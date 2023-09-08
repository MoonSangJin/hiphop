import { NextResponse } from 'next/server';

interface Post {
  id: number;
  title: string;
  content: string;
}

const allPosts: Post[] = [
  {
    id: 1,
    title: '첫 번째 게시물 제목',
    content: '안녕하세요, 첫 번째 게시물 내용입니다.',
  },
  {
    id: 2,
    title: '두 번째 게시물 제목',
    content: '안녕하세요, 두 번째 게시물 내용입니다.',
  },
];

const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(allPosts), 1500);
  });
};

export async function GET() {
  console.log('get 요청 들어옴');
  const data = await wait();
  console.log(data);
  return NextResponse.json(data);
}
