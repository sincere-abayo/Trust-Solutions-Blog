import Layout from "@/components/layout/Layout";
import CTA from "@/components/ui/CTA";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/data/blogPosts";
import Link from "next/link";

export default function DigitalMarketingPage() {
  const allPosts = getAllPosts();
  const marketingPosts = allPosts.filter(
    (post) => post.category.toLowerCase() === "digital marketing"
  );

  const services = [
    {
      title: "Social Media Marketing",
      description: "Build and engage your audience across social platforms",
      longDescription:
        "Amplify your brand presence with strategic social media marketing. We create engaging content, manage your social channels, and build meaningful connections with your target audience across all major platforms.",
      features: [
        "Social Media Strategy Development",
        "Content Creation & Curation",
        "Community Management",
        "Paid Social Advertising",
        "Analytics & Reporting",
      ],
      benefits: [
        "Increased brand awareness",
        "Higher engagement rates",
        "Community building",
        "Lead generation",
      ],
      process: [
        "Audience Analysis",
        "Strategy Development",
        "Content Creation",
        "Performance Optimization",
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
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
      color: "orange",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your visibility and rank higher in search results",
      longDescription:
        "Drive organic traffic to your website with comprehensive SEO strategies. We optimize your online presence to improve search rankings, increase visibility, and attract qualified leads.",
      features: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Link Building Campaigns",
        "Local SEO Management",
      ],
      benefits: [
        "Higher search rankings",
        "Increased organic traffic",
        "Better user experience",
        "Long-term ROI",
      ],
      process: [
        "SEO Audit",
        "Strategy Development",
        "Implementation",
        "Monitoring & Refinement",
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
      title: "Content Marketing",
      description:
        "Create compelling content that drives engagement and conversions",
      longDescription:
        "Tell your brand story with strategic content marketing. We create valuable, relevant content that attracts and retains your target audience while driving profitable customer action.",
      features: [
        "Content Strategy Development",
        "Blog Writing & Management",
        "Video Content Production",
        "Email Marketing Campaigns",
        "Content Distribution",
      ],
      benefits: [
        "Thought leadership",
        "Audience engagement",
        "Lead nurturing",
        "Brand authority",
      ],
      process: [
        "Content Planning",
        "Creation & Production",
        "Distribution",
        "Performance Analysis",
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      color: "purple",
    },
    {
      title: "Paid Advertising (PPC)",
      description: "Maximize ROI with targeted paid advertising campaigns",
      longDescription:
        "Drive immediate results with strategic paid advertising. We create and manage high-performing campaigns across Google Ads, social media platforms, and display networks to maximize your advertising ROI.",
      features: [
        "Campaign Strategy & Planning",
        "Ad Creation & Copywriting",
        "Audience Targeting",
        "Bid Management",
        "Conversion Tracking & Optimization",
      ],
      benefits: [
        "Immediate visibility",
        "Targeted reach",
        "Measurable results",
        "Scalable campaigns",
      ],
      process: [
        "Campaign Planning",
        "Ad Creation",
        "Launch & Monitoring",
        "Optimization",
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
      color: "green",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-full text-orange-200 text-sm font-medium">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Data-Driven Marketing Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Digital Marketing Services
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            Amplifying your brand and expanding your reach. Strategic digital
            marketing that drives growth and delivers measurable results.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From social media to SEO, we provide comprehensive digital
              marketing solutions that help your business thrive online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`bg-gradient-to-br ${
                  service.color === "orange"
                    ? "from-orange-50 to-orange-100 border-orange-200"
                    : service.color === "blue"
                    ? "from-blue-50 to-blue-100 border-blue-200"
                    : service.color === "purple"
                    ? "from-purple-50 to-purple-100 border-purple-200"
                    : "from-green-50 to-green-100 border-green-200"
                } border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${
                      service.color === "orange"
                        ? "bg-orange-500 text-white"
                        : service.color === "blue"
                        ? "bg-blue-500 text-white"
                        : service.color === "purple"
                        ? "bg-purple-500 text-white"
                        : "bg-green-500 text-white"
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
                            service.color === "orange"
                              ? "bg-orange-500"
                              : service.color === "blue"
                              ? "bg-blue-500"
                              : service.color === "purple"
                              ? "bg-purple-500"
                              : "bg-green-500"
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
                          service.color === "orange"
                            ? "bg-orange-200 text-orange-800"
                            : service.color === "blue"
                            ? "bg-blue-200 text-blue-800"
                            : service.color === "purple"
                            ? "bg-purple-200 text-purple-800"
                            : "bg-green-200 text-green-800"
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
                            service.color === "orange"
                              ? "bg-orange-500"
                              : service.color === "blue"
                              ? "bg-blue-500"
                              : service.color === "purple"
                              ? "bg-purple-500"
                              : "bg-green-500"
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
                    href="/contact?service=digital-marketing"
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      service.color === "orange"
                        ? "bg-orange-600 hover:bg-orange-700 text-white"
                        : service.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : service.color === "purple"
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-green-600 hover:bg-green-700 text-white"
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
                Why Choose Trust Solutions for Digital Marketing?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-4 mt-1">
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
                      Data-Driven Strategies
                    </h3>
                    <p className="text-gray-600">
                      We use analytics and insights to create campaigns that
                      deliver measurable results and ROI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-4 mt-1">
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
                      Multi-Channel Expertise
                    </h3>
                    <p className="text-gray-600">
                      From social media to SEO, we excel across all digital
                      marketing channels to maximize your reach.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-4 mt-1">
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
                      Creative Excellence
                    </h3>
                    <p className="text-gray-600">
                      Our creative team produces compelling content that
                      resonates with your audience and drives engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-4 mt-1">
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
                      Transparent Reporting
                    </h3>
                    <p className="text-gray-600">
                      Regular reports and insights keep you informed about
                      campaign performance and ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-orange-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Ready to Amplify Your Brand?
              </h3>
              <p className="mb-6">
                Let&apos;s discuss how our digital marketing services can help
                you expand your reach, engage your audience, and drive
                measurable business growth.
              </p>
              <Link
                href="/contact?service=digital-marketing"
                className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
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
              Digital Marketing Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest insights on digital marketing
              trends, strategies, and best practices.
            </p>
          </div>

          {marketingPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No digital marketing posts available at the moment.
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium text-lg"
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
        title="Ready to Grow Your **Digital Presence**?"
        subtitle="Let's discuss how our digital marketing services can help you amplify your brand and expand your reach."
        primaryButtonText="Get Started Today"
        secondaryButtonText="Learn More About Us"
        service="digital-marketing"
      />
    </Layout>
  );
}
