"use client";

import { useState, useMemo, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    username: string;
  };
  publishedAt: string;
  featuredImage: string;
  tags?: string[];
  readingTime?: number;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/articles");
        if (response.ok) {
          const data = await response.json();
          // API returns {articles: [...]} so extract the articles array
          const articlesArray = data.articles || data;

          if (Array.isArray(articlesArray)) {
            setArticles(articlesArray);
          } else {
            console.error("API response is not an array:", data);
            setArticles([]);
          }
        } else {
          console.error("Failed to fetch articles:", response.status);
          setArticles([]);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const categories = useMemo(() => {
    const categoryCounts: Record<string, number> = {};

    // Ensure articles is an array before calling forEach
    if (Array.isArray(articles)) {
      articles.forEach((article) => {
        categoryCounts[article.category] =
          (categoryCounts[article.category] || 0) + 1;
      });
    }

    return [
      { id: "all", name: "All Posts", count: articles.length },
      {
        id: "business",
        name: "Business Consulting",
        count: categoryCounts["business"] || 0,
      },
      {
        id: "it-consulting",
        name: "IT Consulting",
        count: categoryCounts["it-consulting"] || 0,
      },
      {
        id: "real-estate",
        name: "Real Estate",
        count: categoryCounts["real-estate"] || 0,
      },
      {
        id: "events",
        name: "Event Planning",
        count: categoryCounts["events"] || 0,
      },
      {
        id: "digital-marketing",
        name: "Digital Marketing",
        count: categoryCounts["digital-marketing"] || 0,
      },
    ];
  }, [articles]);

  const filteredPosts = useMemo(() => {
    let posts =
      selectedCategory === "all"
        ? articles
        : articles.filter((article) => article.category === selectedCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          (post.tags &&
            post.tags.some((tag) => tag.toLowerCase().includes(query)))
      );
    }

    return posts;
  }, [selectedCategory, searchQuery, articles]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trust Solutions Blog
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Expert insights and practical advice across business consulting,
            real estate, and event planning.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === "all"
                    ? "All Posts"
                    : `${
                        categories.find((c) => c.id === selectedCategory)?.name
                      }`}
                  {searchQuery && ` - Search Results for "${searchQuery}"`}
                </h2>
                <p className="text-gray-600 mt-2">
                  {filteredPosts.length} post
                  {filteredPosts.length !== 1 ? "s" : ""} found
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((article, index) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <a
                      href={`/category/${article.category}/${article.slug}`}
                      className="block"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={article.featuredImage}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={index < 3}
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-blue-600 uppercase">
                            {article.category.replace("-", " ")}
                          </span>
                          {article.readingTime && (
                            <>
                              <span className="text-gray-400">•</span>
                              <span className="text-xs text-gray-500">
                                {article.readingTime} min read
                              </span>
                            </>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{article.author.username}</span>
                          <span>
                            {new Date(article.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <svg
                className="mx-auto h-16 w-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No posts found
              </h3>
              <p className="text-gray-600 mb-6">
                {searchQuery
                  ? `No posts match your search for "${searchQuery}"`
                  : "No posts found in this category"}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View all posts
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest insights and tips delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </Layout>
  );
}
