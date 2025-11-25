import { notFound } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import SocialShare from "@/components/blog/SocialShare";
import VideoEmbed from "@/components/blog/VideoEmbed";
import { getDefaultFeaturedImage } from "@/utils/defaultImages";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featuredImage?: string;
  videoUrl?: string;
  readingTime: number;
  publishedAt: string;
  author: {
    username: string;
  };
}

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

const categoryLabels: Record<string, string> = {
  business: "Business Strategy",
  "it-consulting": "IT Solutions",
  "real-estate": "Real Estate Insights",
  events: "Event Planning Tips",
  "digital-marketing": "Digital Marketing",
};

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/articles/${slug}`, {
      cache: "no-store", // Always fetch fresh data
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.article;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { category, slug } = await params;
  const article = await getArticle(slug);

  if (!article || article.category !== category) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Convert content to HTML (basic markdown-like conversion)
  const formatContent = (content: string) => {
    return content
      .split("\\n\\n")
      .map((paragraph, index) => {
        if (paragraph.startsWith("# ")) {
          return `<h2 key="${index}" class="text-2xl font-bold text-gray-900 mt-8 mb-4">${paragraph.slice(2)}</h2>`;
        }
        if (paragraph.startsWith("## ")) {
          return `<h3 key="${index}" class="text-xl font-bold text-gray-900 mt-6 mb-3">${paragraph.slice(3)}</h3>`;
        }
        if (paragraph.startsWith("- ")) {
          const items = paragraph
            .split("\\n")
            .map((item) =>
              item.startsWith("- ")
                ? `<li class="mb-1">${item.slice(2)}</li>`
                : item
            )
            .join("");
          return `<ul key="${index}" class="list-disc list-inside mb-4 text-gray-700">${items}</ul>`;
        }
        return `<p key="${index}" class="mb-4 text-gray-700 leading-relaxed">${paragraph}</p>`;
      })
      .join("");
  };

  return (
    <Layout>
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <Link
                  href={`/category/${article.category}`}
                  className="hover:text-gray-700"
                >
                  {categoryLabels[article.category] || article.category}
                </Link>
              </li>
              <li>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li className="text-gray-900">{article.title}</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {categoryLabels[article.category] || article.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={
                  article.featuredImage ||
                  getDefaultFeaturedImage(article.category)
                }
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 border-b border-gray-200 pb-6">
              <div className="flex items-center space-x-4">
                <span>By {article.author.username}</span>
                <span>•</span>
                <span>{formatDate(article.publishedAt)}</span>
                <span>•</span>
                <span>{article.readingTime} min read</span>
              </div>
            </div>
          </header>

          {/* Video Embed */}
          {article.videoUrl && (
            <VideoEmbed videoUrl={article.videoUrl} title={article.title} />
          )}

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
          />

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-2">Published in</p>
                <Link
                  href={`/category/${article.category}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {categoryLabels[article.category] || article.category}
                </Link>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500 mb-2">Share this article</p>
                <SocialShare
                  title={article.title}
                  url={`${process.env.NEXT_PUBLIC_BASE_URL || "https://www.trustsolutionscompany.com"}/category/${article.category}/${article.slug}`}
                />
              </div>
            </div>
          </footer>
        </div>
      </article>
    </Layout>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Trust Solutions`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.username],
    },
  };
}
