import Layout from "@/components/layout/Layout";
import CTA from "@/components/ui/CTA";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/data/blogPosts";
import Link from "next/link";

export default function RealEstatePage() {
  const allPosts = getAllPosts();
  const realEstatePosts = allPosts.filter(
    (post) => post.category.toLowerCase() === "real estate"
  );

  const services = [
    {
      title: "Property Sales",
      description: "Expert guidance through the entire selling process",
      longDescription:
        "Maximize your property value with our comprehensive selling services. From market analysis to closing, we handle every aspect of your property sale to ensure you get the best possible outcome.",
      features: [
        "Market Valuation & Pricing Strategy",
        "Professional Property Marketing",
        "Buyer Screening & Qualification",
        "Negotiation & Contract Management",
        "Closing Coordination",
      ],
      benefits: [
        "Maximum sale price",
        "Faster sale timeline",
        "Professional marketing",
        "Stress-free process",
      ],
      process: [
        "Property Assessment",
        "Market Analysis",
        "Marketing Launch",
        "Sale Completion",
      ],
      icon: (
        <svg
          className="w-8 h-8"
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
      color: "green",
    },
    {
      title: "Property Search",
      description: "Find your perfect property with expert guidance",
      longDescription:
        "Discover your ideal property with our extensive market knowledge and personalized search service. We match you with properties that meet your specific needs and budget requirements.",
      features: [
        "Personalized Property Search",
        "Market Area Analysis",
        "Property Viewing Coordination",
        "Due Diligence Support",
        "Purchase Negotiation",
      ],
      benefits: [
        "Time savings",
        "Access to exclusive listings",
        "Expert market insights",
        "Negotiation advantage",
      ],
      process: [
        "Needs Assessment",
        "Property Search",
        "Viewing & Evaluation",
        "Purchase Support",
      ],
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      color: "blue",
    },
    {
      title: "Investment Advisory",
      description: "Strategic real estate investment guidance",
      longDescription:
        "Build wealth through smart real estate investments. Our advisory service helps you identify lucrative opportunities, analyze returns, and develop a diversified property portfolio.",
      features: [
        "Market Opportunity Analysis",
        "ROI & Cash Flow Projections",
        "Portfolio Diversification Strategy",
        "Risk Assessment & Mitigation",
        "Property Management Solutions",
      ],
      benefits: [
        "Passive income generation",
        "Long-term wealth building",
        "Portfolio diversification",
        "Tax advantages",
      ],
      process: [
        "Investment Goals Setting",
        "Market Analysis",
        "Property Selection",
        "Portfolio Management",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      color: "purple",
    },
    {
      title: "Property Management",
      description: "Complete property management and maintenance",
      longDescription:
        "Maximize your rental income with our comprehensive property management services. We handle tenant relations, maintenance, and all aspects of property operations.",
      features: [
        "Tenant Screening & Placement",
        "Rent Collection & Accounting",
        "Maintenance & Repairs",
        "Property Inspections",
        "Financial Reporting",
      ],
      benefits: [
        "Passive rental income",
        "Property value preservation",
        "Tenant satisfaction",
        "Reduced vacancy rates",
      ],
      process: [
        "Property Assessment",
        "Marketing & Leasing",
        "Tenant Management",
        "Ongoing Maintenance",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      color: "orange",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-200 text-sm font-medium">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Over 5 Years Experience
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Real Estate Solutions
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Connecting you with prime property opportunities. Comprehensive
            solutions for buying, selling, and investing in properties.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Real Estate Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential to commercial properties, we offer comprehensive
              real estate solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`bg-gradient-to-br ${
                  service.color === "green"
                    ? "from-green-50 to-green-100 border-green-200"
                    : service.color === "blue"
                    ? "from-blue-50 to-blue-100 border-blue-200"
                    : service.color === "purple"
                    ? "from-purple-50 to-purple-100 border-purple-200"
                    : "from-orange-50 to-orange-100 border-orange-200"
                } border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${
                      service.color === "green"
                        ? "bg-green-500 text-white"
                        : service.color === "blue"
                        ? "bg-blue-500 text-white"
                        : service.color === "purple"
                        ? "bg-purple-500 text-white"
                        : "bg-orange-500 text-white"
                    } rounded-xl shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.longDescription}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-3 ${
                            service.color === "green"
                              ? "bg-green-500"
                              : service.color === "blue"
                              ? "bg-blue-500"
                              : service.color === "purple"
                              ? "bg-purple-500"
                              : "bg-orange-500"
                          }`}
                        ></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Benefits
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-sm rounded-full ${
                          service.color === "green"
                            ? "bg-green-200 text-green-800"
                            : service.color === "blue"
                            ? "bg-blue-200 text-blue-800"
                            : service.color === "purple"
                            ? "bg-purple-200 text-purple-800"
                            : "bg-orange-200 text-orange-800"
                        }`}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                    Our Process
                  </h4>
                  <div className="flex items-center space-x-2 overflow-x-auto">
                    {service.process.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-center flex-shrink-0"
                      >
                        <div
                          className={`w-8 h-8 rounded-full ${
                            service.color === "green"
                              ? "bg-green-500"
                              : service.color === "blue"
                              ? "bg-blue-500"
                              : service.color === "purple"
                              ? "bg-purple-500"
                              : "bg-orange-500"
                          } text-white flex items-center justify-center text-sm font-semibold`}
                        >
                          {idx + 1}
                        </div>
                        <span className="ml-2 text-sm text-gray-700 whitespace-nowrap">
                          {step}
                        </span>
                        {idx < service.process.length - 1 && (
                          <div className="mx-4 w-8 h-0.5 bg-gray-300"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact?service=real-estate"
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      service.color === "green"
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : service.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : service.color === "purple"
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-orange-600 hover:bg-orange-700 text-white"
                    }`}
                  >
                    Get Started with {service.title}
                    <svg
                      className="ml-2 w-4 h-4"
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
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50 hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Estate Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest insights, market trends, and expert
              advice for real estate success.
            </p>
          </div>

          {realEstatePosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realEstatePosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No real estate posts available at the moment.
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium text-lg"
            >
              View All Blog Posts
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

      {/* CTA Section */}
      <CTA
        title="Ready to Find Your **Perfect Property**?"
        subtitle="Let's discuss how our real estate services can help you achieve your property goals."
        primaryButtonText="Get Started Today"
        secondaryButtonText="Learn More About Us"
        service="real-estate"
      />
    </Layout>
  );
}
