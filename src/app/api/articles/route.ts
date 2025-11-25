import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Get published articles (public)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = searchParams.get('limit');

    const where: Record<string, unknown> = { status: 'published' };
    if (category) where.category = category;

    const articles = await prisma.article.findMany({
      where,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        category: true,
        featuredImage: true,
        readingTime: true,
        publishedAt: true,
        author: {
          select: { username: true }
        }
      },
      orderBy: { publishedAt: 'desc' },
      take: limit ? parseInt(limit) : undefined
    });

    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Get published articles error:', error);
    return NextResponse.json({ articles: [] });
  }
}