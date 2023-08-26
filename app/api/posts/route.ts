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

export async function GET() {
  return NextResponse.json(allPosts);
}
