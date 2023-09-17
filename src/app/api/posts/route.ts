import { PrismaClient, Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: string;
  comments: string | undefined;
}
const prisma = new PrismaClient();

const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('hi'), 1500);
  });
};

export async function GET() {
  const resultDB = await prisma.post.findMany();
  return NextResponse.json(resultDB);
}

export async function POST(requset: NextRequest) {
  console.log('post here');
  await wait();
  const requestData = await requset.json();
  await prisma.post.create({ data: requestData });
  return NextResponse.json('success post');
}
