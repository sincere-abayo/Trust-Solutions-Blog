import Layout from "@/components/layout/Layout";
import CTA from "@/components/ui/CTA";
import BlogCard from "@/components/blog/BlogCard";
import { getPostsByCategory } from "@/data/blogPosts";
import Link from "next/link";

export default function BusinessCategoryPage() {
  const businessPosts = getPostsByCategory("business");

  const services = [
    {
      title: "Strategic Planning",
      description:
        "Comprehensive business strategy development and implementation",
      longDescription:
        "Transform your business vision into actionable strategies. Our strategic planning service helps you define clear objectives, identify market opportunities, and create roadmaps for sustainable growth.",
      features: [
        "Vision & Mission Development",
        "SWOT Analysis & Gap Assessment",
        "Strategic Roadmap Creation",
        "KPI & Metrics Framework",
        "Risk Management Planning",
      ],
      benefits: [
        "Clear direction and focus",
        "Better resource allocation",
        "Improved decision making",
        "Competitive advantage",
      ],
      process: [
        "Current State Assessment",
        "Future State Visioning",
        "Strategy Formulation",
        "Implementation Planning",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      color: "blue",
    },
    {
      title: "Market Analysis",
      description: "In-depth market research and competitive intelligence",
      longDescription:
        "Gain deep insights into your market landscape. Our comprehensive market analysis provides you with the intelligence needed to make informed decisions and stay ahead of the competition.",
      features: [
        "Industry Trend Analysis",
        "Competitor Intelligence",
        "Customer Behavior Studies",
        "Market Size & Segmentation",
        "Opportunity Identification",
      ],
      benefits: [
        "Data-driven insights",
        "Competitive positioning",
        "Market opportunities",
        "Risk mitigation",
      ],
      process: [
        "Market Research Design",
        "Data Collection & Analysis",
        "Competitive Benchmarking",
        "Insights & Recommendations",
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
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "green",
    },
    {
      title: "Business Development",
      description: "Growth strategies and market expansion planning",
      longDescription:
        "Accelerate your business growth with proven strategies. We help you identify new opportunities, expand into new markets, and build sustainable revenue streams.",
      features: [
        "Growth Strategy Development",
        "Market Entry Planning",
        "Partnership & Alliance Strategy",
        "Revenue Model Optimization",
        "Sales Process Enhancement",
      ],
      benefits: [
        "Accelerated growth",
        "New revenue streams",
        "Market expansion",
        "Strategic partnerships",
      ],
      process: [
        "Growth Opportunity Assessment",
        "Strategy Development",
        "Implementation Planning",
        "Performance Monitoring",
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
      title: "Performance Optimization",
      description: "Process improvement and operational efficiency",
      longDescription:
        "Maximize your operational efficiency and performance. Our optimization service identifies bottlenecks, streamlines processes, and implements best practices for sustainable improvement.",
      features: [
        "Process Analysis & Mapping",
        "Efficiency Optimization",
        "Cost Reduction Strategies",
        "Quality Improvement",
        "Performance Metrics",
      ],
      benefits: [
        "Reduced operational costs",
        "Improved productivity",
        "Better quality outcomes",
        "Enhanced customer satisfaction",
      ],
      process: [
        "Current State Analysis",
        "Bottleneck Identification",
        "Solution Design",
        "Implementation & Monitoring",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "orange",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Over 2 Years Experience
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Business Consulting
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Expert strategic planning and advisory solutions to help your
            business grow and thrive in today&apos;s competitive market.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Business Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in turning your business challenges into
              opportunities through strategic planning, market analysis, and
              proven business development strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`bg-gradient-to-br ${
                  service.color === "blue"
                    ? "from-blue-50 to-blue-100 border-blue-200"
                    : service.color === "green"
                    ? "from-green-50 to-green-100 border-green-200"
                    : service.color === "purple"
                    ? "from-purple-50 to-purple-100 border-purple-200"
                    : "from-orange-50 to-orange-100 border-orange-200"
                } border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${
                      service.color === "blue"
                        ? "bg-blue-500 text-white"
                        : service.color === "green"
                        ? "bg-green-500 text-white"
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
                            service.color === "blue"
                              ? "bg-blue-500"
                              : service.color === "green"
                              ? "bg-green-500"
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
                          service.color === "blue"
                            ? "bg-blue-200 text-blue-800"
                            : service.color === "green"
                            ? "bg-green-200 text-green-800"
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
                            service.color === "blue"
                              ? "bg-blue-500"
                              : service.color === "green"
                              ? "bg-green-500"
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
                    href="/contact?service=business"
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      service.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : service.color === "green"
                        ? "bg-green-600 hover:bg-green-700 text-white"
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Trust Solutions for Business Consulting?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Proven Track Record
                    </h3>
                    <p className="text-gray-600">
                      Over 2 years of helping businesses achieve sustainable
                      growth and market leadership.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Customized Solutions
                    </h3>
                    <p className="text-gray-600">
                      Every business is unique. We develop tailored strategies
                      that align with your specific goals and challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Expert Team
                    </h3>
                    <p className="text-gray-600">
                      Our consultants bring deep industry knowledge and
                      practical experience to every engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600">
                      We don&apos;t just create plans—we help implement them and
                      provide ongoing guidance for success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="mb-6">
                Let&apos;s discuss how our strategic consulting services can
                help you overcome challenges, identify opportunities, and
                achieve sustainable growth.
              </p>
              <Link
                href="/contact?service=business"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Business Consulting Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest insights, strategies, and best
              practices for business growth and success.
            </p>
          </div>

          {businessPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No business consulting posts available at the moment.
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-lg"
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
        title="Ready to Accelerate Your **Business Growth**?"
        subtitle="Let's discuss how our strategic consulting services can help you overcome challenges and achieve your business objectives."
        primaryButtonText="Schedule Consultation Today"
        secondaryButtonText="Learn More About Us"
        service="business"
      />
    </Layout>
  );
}
