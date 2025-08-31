import Layout from "@/components/layout/Layout";
import Hero from "@/components/ui/Hero";
import BlogCard from "@/components/blog/BlogCard";
import { getFeaturedPosts, getAllPosts } from "@/data/blogPosts";
import Link from "next/link";

// Function to get relevant live images based on category
const getFeaturedImage = (category: string): string => {
  const businessImages = [
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center", // Business meeting
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center", // Strategic planning
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center", // Team collaboration
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&crop=center", // Business growth
  ];

  const realEstateImages = [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center", // Modern house
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=center", // Luxury property
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&crop=center", // Real estate investment
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&crop=center", // Property development
  ];

  const eventImages = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center", // Corporate event
    "https://images.unsplash.com/photo-1519167758481-83f550bbd0dc?w=800&h=600&fit=crop&crop=center", // Wedding planning
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&crop=center", // Conference setup
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop&crop=center", // Event decoration
  ];

  switch (category.toLowerCase()) {
    case "business":
      return businessImages[Math.floor(Math.random() * businessImages.length)];
    case "real estate":
      return realEstateImages[
        Math.floor(Math.random() * realEstateImages.length)
      ];
    case "events":
      return eventImages[Math.floor(Math.random() * eventImages.length)];
    default:
      return businessImages[0];
  }
};

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getAllPosts().slice(0, 6);

  const services = [
    {
      title: "Strategic Business Consulting",
      description:
        "Expert advisory solutions to help your business grow and thrive in today&apos;s competitive market.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
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
      ),
      href: "/category/business",
    },
    {
      title: "Real Estate Brokerage",
      description:
        "Comprehensive real estate solutions for buying, selling, and investing in properties.",
      icon: (
        <svg
          className="w-12 h-12 text-green-600"
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
      ),
      href: "/category/real-estate",
    },
    {
      title: "Creative Event Planning",
      description:
        "Memorable and successful events that exceed expectations and create lasting impressions.",
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
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
      ),
      href: "/category/events",
    },
  ];

  return (
    <Layout>
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trust Solutions Company delivers effective, customized solutions
              across our three areas of expertise. Whatever your challenge, we
              provide the solution.
            </p>
          </div>

          {/* Enhanced Services Grid - RISE-inspired */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-10 shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 hover:border-blue-200 overflow-hidden relative"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-2xl">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold text-lg group-hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                    <svg
                      className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover expert insights and practical advice from our team of
              professionals across all three service areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={{
                  ...post,
                  featuredImage: getFeaturedImage(post.category),
                }}
                featured={true}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
            >
              View All Posts
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

      {/* Recent Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest articles, tips, and industry insights
              across business consulting, real estate, and event planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={{
                  ...post,
                  featuredImage: getFeaturedImage(post.category),
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - RISE-inspired */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Whatever your challenge, we provide the solution. Contact us today
            to discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transform"
            >
              CONTACT US TODAY
            </Link>
            <Link
              href="/about"
              className="border-3 border-white text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transform"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
