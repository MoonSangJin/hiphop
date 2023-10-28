import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const resultDB = await prisma.post.findUnique({ where: { id: params.id } });
  return NextResponse.json(resultDB);
}
