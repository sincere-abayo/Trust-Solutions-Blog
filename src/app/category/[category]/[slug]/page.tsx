import { notFound } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
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
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      const url = window.location.href;
                      const text = article.title;
                      window.open(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
                        "_blank"
                      );
                    }}
                    className="text-gray-400 hover:text-blue-500"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      const url = window.location.href;
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                        "_blank"
                      );
                    }}
                    className="text-gray-400 hover:text-blue-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
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
