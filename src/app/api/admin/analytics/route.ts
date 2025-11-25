import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const session = cookieStore.get('admin-session');
    
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Get parameters from query string
    const { searchParams } = new URL(request.url);
    const daysParam = searchParams.get('days');
    const monthParam = searchParams.get('month');
    const startDateParam = searchParams.get('startDate');
    const endDateParam = searchParams.get('endDate');
    
    // Get date ranges
    const now = new Date();
    let customDaysAgo: Date;
    
    if (monthParam) {
      // Month format: YYYY-MM
      const [year, month] = monthParam.split('-').map(Number);
      customDaysAgo = new Date(year, month - 1, 1); // First day of month
    } else if (startDateParam && endDateParam) {
      // Custom date range
      customDaysAgo = new Date(startDateParam);
    } else {
      // Days-based filter
      const days = daysParam ? parseInt(daysParam) : 30;
      customDaysAgo = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    }
    
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Fetch analytics
    const [
      totalMessages,
      newMessages,
      totalViews,
      viewsLast7Days,
      viewsToday,
      topPages,
      messagesByService,
      recentMessages
    ] = await Promise.all([
      // Total messages
      prisma.contactMessage.count().catch(() => 0),
      
      // New messages (unread)
      prisma.contactMessage.count({
        where: { status: 'new' }
      }).catch(() => 0),
      
      // Total page views
      prisma.pageView.count().catch(() => 0),
      
      // Views last 7 days
      prisma.pageView.count({
        where: {
          createdAt: { gte: sevenDaysAgo }
        }
      }).catch(() => 0),
      
      // Views today
      prisma.pageView.count({
        where: {
          createdAt: { gte: today }
        }
      }).catch(() => 0),
      
      // Top pages (custom period)
      prisma.pageView.groupBy({
        by: ['path'],
        _count: true,
        where: {
          createdAt: { gte: customDaysAgo }
        },
        orderBy: {
          _count: {
            path: 'desc'
          }
        },
        take: 10
      }).catch(() => []),
      
      // Messages by service
      prisma.contactMessage.groupBy({
        by: ['service'],
        _count: true,
        orderBy: {
          _count: {
            service: 'desc'
          }
        }
      }).catch(() => []),
      
      // Recent messages
      prisma.contactMessage.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: {
          id: true,
          name: true,
          email: true,
          service: true,
          status: true,
          createdAt: true
        }
      }).catch(() => [])
    ]);
    
    return NextResponse.json({
      totalMessages,
      newMessages,
      totalViews,
      viewsLast7Days,
      viewsToday,
      topPages: topPages.map(p => ({
        path: p.path,
        views: p._count
      })),
      messagesByService: messagesByService.map(m => ({
        service: m.service,
        count: m._count
      })),
      recentMessages
    });
  } catch (error) {
    console.error('Analytics error:', error);
    
    // Return default analytics data when database is unavailable
    return NextResponse.json({
      totalMessages: 0,
      newMessages: 0,
      totalViews: 0,
      viewsLast7Days: 0,
      viewsToday: 0,
      topPages: [],
      messagesByService: [],
      recentMessages: []
    });
  }
}
