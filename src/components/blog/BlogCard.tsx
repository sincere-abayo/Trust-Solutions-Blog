import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: Date;
  readTime: number;
  slug: string;
  featuredImage?: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "business":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "real estate":
        return "bg-green-100 text-green-800 border-green-200";
      case "events":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "business":
        return (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        );
      case "real estate":
        return (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        );
      case "events":
        return (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
        );
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category.toLowerCase()) {
      case "business":
        return "from-blue-500 to-blue-600";
      case "real estate":
        return "from-green-500 to-green-600";
      case "events":
        return "from-purple-500 to-purple-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <article
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 ${
        featured ? "ring-2 ring-blue-500 shadow-xl" : ""
      } hover:-translate-y-2`}
    >
      {/* Featured Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${getCategoryGradient(
              post.category
            )} flex items-center justify-center`}
          >
            <div className="text-white text-6xl font-bold opacity-20">
              {post.category.charAt(0).toUpperCase()}
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border ${getCategoryColor(
              post.category
            )}`}
          >
            {getCategoryIcon(post.category)}
            <span className="ml-1.5">{post.category}</span>
          </span>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            ⭐ Featured
          </div>
        )}

        {/* Read Time Badge */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
          {post.readTime} min read
        </div>
      </div>

      <div className="p-6">
        {/* Title */}
        <h3
          className={`font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 ${
            featured ? "text-xl" : "text-lg"
          }`}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="hover:underline decoration-2 underline-offset-4"
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author and Date */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white text-sm font-semibold">
                {post.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {post.author}
              </p>
              <p className="text-xs text-gray-500">
                {formatDistanceToNow(post.publishedAt, { addSuffix: true })}
              </p>
            </div>
          </div>

          {/* Read More */}
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:underline decoration-2 underline-offset-4 transition-all duration-200 hover:scale-105"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
