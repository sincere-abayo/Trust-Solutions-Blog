import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Get single published article by slug (public)
export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const article = await prisma.article.findUnique({
      where: { 
        slug,
        status: 'published'
      },
      include: {
        author: {
          select: { username: true }
        }
      }
    });

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json({ article });
  } catch (error) {
    console.error('Get article by slug error:', error);
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
  }
}