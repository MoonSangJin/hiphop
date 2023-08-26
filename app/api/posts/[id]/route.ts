import { NextRequest, NextResponse } from 'next/server';

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: '첫 번째 게시물 세부사항',
    content: '안녕하세요, 첫 번째 게시물 내용입니다.',
  },
  {
    id: 2,
    title: '두 번째 게시물 세부사항',
    content: '안녕하세요, 두 번째 게시물 내용입니다.',
  },
];

export async function GET(request: NextRequest, context: any) {
  const id = Number(context.params.id);
  const post = posts.find((p) => p.id === id);
  return NextResponse.json(post);
}
