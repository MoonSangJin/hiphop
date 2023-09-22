import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import prisma from '@/prisma/db';

export async function GET(request: NextRequest, { params }) {
  const resultDB = await prisma.post.findUnique({ where: { id: params.id } });
  return NextResponse.json(resultDB);
}
