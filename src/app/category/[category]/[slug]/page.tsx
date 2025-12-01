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
    // Import prisma dynamically to avoid issues
    const { prisma } = await import("@/lib/prisma");

    const article = await prisma.article.findFirst({
      where: {
        slug,
        status: "published",
      },
      include: {
        author: {
          select: { username: true },
        },
      },
    });

    if (!article) return null;

    // Convert database types to match Article interface
    return {
      id: article.id,
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category,
      featuredImage: article.featuredImage ?? undefined,
      videoUrl: article.videoUrl ?? undefined,
      readingTime: article.readingTime,
      publishedAt:
        article.publishedAt?.toISOString() || new Date().toISOString(),
      author: article.author,
    };
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

  // Convert content to HTML (markdown conversion)
  const formatContent = (content: string) => {
    // Split by double newlines for paragraphs
    const blocks = content.split(/\n\n+/);

    return blocks
      .map((block, index) => {
        const trimmedBlock = block.trim();

        // Heading level 1 (# )
        if (trimmedBlock.startsWith("# ")) {
          return `<h2 key="${index}" class="text-3xl font-bold text-gray-900 mt-8 mb-4">${trimmedBlock.slice(2)}</h2>`;
        }

        // Heading level 2 (## )
        if (trimmedBlock.startsWith("## ")) {
          return `<h3 key="${index}" class="text-2xl font-bold text-gray-900 mt-6 mb-3">${trimmedBlock.slice(3)}</h3>`;
        }

        // Heading level 3 (### )
        if (trimmedBlock.startsWith("### ")) {
          return `<h4 key="${index}" class="text-xl font-bold text-gray-900 mt-4 mb-2">${trimmedBlock.slice(4)}</h4>`;
        }

        // Bullet list (lines starting with -)
        if (trimmedBlock.includes("\n- ") || trimmedBlock.startsWith("- ")) {
          const items = trimmedBlock
            .split("\n")
            .filter((line) => line.trim().startsWith("- "))
            .map((item) => `<li class="mb-2">${item.trim().slice(2)}</li>`)
            .join("");
          return `<ul key="${index}" class="list-disc list-inside mb-6 text-gray-700 space-y-2 ml-4">${items}</ul>`;
        }

        // Numbered list (lines starting with number.)
        if (/^\d+\.\s/.test(trimmedBlock)) {
          const items = trimmedBlock
            .split("\n")
            .filter((line) => /^\d+\.\s/.test(line.trim()))
            .map(
              (item) =>
                `<li class="mb-2">${item.trim().replace(/^\d+\.\s/, "")}</li>`
            )
            .join("");
          return `<ol key="${index}" class="list-decimal list-inside mb-6 text-gray-700 space-y-2 ml-4">${items}</ol>`;
        }

        // Bold text (**text**)
        let formattedBlock = trimmedBlock.replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="font-bold">$1</strong>'
        );

        // Italic text (*text*)
        formattedBlock = formattedBlock.replace(
          /\*(.*?)\*/g,
          '<em class="italic">$1</em>'
        );

        // Links [text](url)
        formattedBlock = formattedBlock.replace(
          /\[(.*?)\]\((.*?)\)/g,
          '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>'
        );

        // Regular paragraph
        if (formattedBlock) {
          return `<p key="${index}" class="mb-4 text-gray-700 leading-relaxed">${formattedBlock}</p>`;
        }

        return "";
      })
      .filter((block) => block !== "")
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
                className="w-full h-80 sm:h-96 md:h-[32rem] lg:h-[36rem] object-cover"
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

// Generate static params for published articles
export async function generateStaticParams() {
  try {
    const { prisma } = await import("@/lib/prisma");

    const articles = await prisma.article.findMany({
      where: { status: "published" },
      select: {
        slug: true,
        category: true,
      },
    });

    return articles.map((article) => ({
      category: article.category,
      slug: article.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
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
