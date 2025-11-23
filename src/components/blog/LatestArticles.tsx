"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getDefaultFeaturedImage } from "@/utils/defaultImages";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  featuredImage?: string;
  readingTime: number;
  publishedAt: string;
  author: {
    username: string;
  };
}

const categoryLabels: Record<string, string> = {
  business: "Business Strategy",
  "it-consulting": "IT Solutions",
  "real-estate": "Real Estate Insights",
  events: "Event Planning Tips",
  "digital-marketing": "Digital Marketing",
};

const categoryColors: Record<string, string> = {
  business: "bg-blue-100 text-blue-800",
  "it-consulting": "bg-purple-100 text-purple-800",
  "real-estate": "bg-green-100 text-green-800",
  events: "bg-pink-100 text-pink-800",
  "digital-marketing": "bg-orange-100 text-orange-800",
};

export default function LatestArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestArticles();
  }, []);

  const fetchLatestArticles = async () => {
    try {
      const response = await fetch("/api/articles?limit=3");
      if (response.ok) {
        const data = await response.json();
        setArticles(data.articles || []);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Insights for Rwanda&apos;s Business Community
            </h2>
            <p className="text-lg text-gray-600">
              Expert insights and strategies to grow your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm p-6 animate-pulse"
              >
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                <div className="h-20 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return null; // Don't show section if no articles
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Insights for Rwanda&apos;s Business Community
          </h2>
          <p className="text-lg text-gray-600">
            Expert insights and strategies to grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              {/* Featured Image */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={
                    article.featuredImage ||
                    getDefaultFeaturedImage(article.category)
                  }
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      categoryColors[article.category] ||
                      "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {categoryLabels[article.category] || article.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.readingTime} min read
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  <Link
                    href={`/category/${article.category}/${article.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By {article.author.username}</span>
                  <span>{formatDate(article.publishedAt)}</span>
                </div>

                <div className="mt-4">
                  <Link
                    href={`/category/${article.category}/${article.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Articles
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
