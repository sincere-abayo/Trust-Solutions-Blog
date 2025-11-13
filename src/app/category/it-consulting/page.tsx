import Layout from "@/components/layout/Layout";
import CTA from "@/components/ui/CTA";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/data/blogPosts";
import Link from "next/link";

export default function ITConsultingPage() {
  const allPosts = getAllPosts();
  const itPosts = allPosts.filter(
    (post) => post.category.toLowerCase() === "it consulting"
  );

  const services = [
    {
      title: "IT Infrastructure Management",
      description:
        "Comprehensive IT infrastructure design, implementation, and maintenance",
      longDescription:
        "Build and maintain a robust IT infrastructure that supports your business operations. From network design to server management, we ensure your technology foundation is secure, scalable, and reliable.",
      features: [
        "Network Design & Implementation",
        "Server Management & Virtualization",
        "Cloud Infrastructure Setup",
        "Storage Solutions & Backup",
        "Disaster Recovery Planning",
      ],
      benefits: [
        "Reduced downtime",
        "Improved performance",
        "Enhanced security",
        "Scalable solutions",
      ],
      process: [
        "Infrastructure Assessment",
        "Design & Planning",
        "Implementation",
        "Ongoing Management",
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
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      color: "cyan",
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business with comprehensive security measures",
      longDescription:
        "Safeguard your digital assets with enterprise-grade cybersecurity solutions. We implement multi-layered security strategies to protect against evolving threats and ensure compliance with industry standards.",
      features: [
        "Security Audits & Assessments",
        "Firewall & Intrusion Detection",
        "Data Encryption & Protection",
        "Security Policy Development",
        "Incident Response Planning",
      ],
      benefits: [
        "Data protection",
        "Compliance assurance",
        "Risk mitigation",
        "Peace of mind",
      ],
      process: [
        "Security Assessment",
        "Strategy Development",
        "Implementation",
        "Monitoring & Response",
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      color: "red",
    },
    {
      title: "Cloud Solutions & Migration",
      description: "Seamless cloud adoption and digital transformation",
      longDescription:
        "Embrace the power of cloud computing with our expert migration and management services. We help you leverage cloud technologies to improve efficiency, reduce costs, and enable business agility.",
      features: [
        "Cloud Strategy & Planning",
        "Migration Services (AWS, Azure, GCP)",
        "Cloud Architecture Design",
        "Cost Optimization",
        "Multi-Cloud Management",
      ],
      benefits: [
        "Cost savings",
        "Scalability",
        "Business continuity",
        "Global accessibility",
      ],
      process: [
        "Cloud Readiness Assessment",
        "Migration Planning",
        "Execution & Testing",
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
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      color: "blue",
    },
    {
      title: "IT Support & Helpdesk",
      description: "24/7 technical support and IT service management",
      longDescription:
        "Keep your business running smoothly with our responsive IT support services. Our experienced team provides quick resolution to technical issues and proactive maintenance to prevent problems before they occur.",
      features: [
        "24/7 Helpdesk Support",
        "Remote & On-site Assistance",
        "Ticket Management System",
        "Proactive Monitoring",
        "User Training & Documentation",
      ],
      benefits: [
        "Minimal downtime",
        "Increased productivity",
        "Expert assistance",
        "Cost-effective support",
      ],
      process: [
        "Support Setup",
        "Issue Tracking",
        "Resolution & Documentation",
        "Continuous Improvement",
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
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      color: "green",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-200 text-sm font-medium">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Cutting-Edge Technology Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            IT Consulting Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto">
            Future proofing your operations with smart technology. Drive digital
            transformation and business growth with comprehensive IT solutions.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our IT Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From infrastructure management to cybersecurity, we provide
              end-to-end IT solutions that empower your business to thrive in
              the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`bg-gradient-to-br ${
                  service.color === "cyan"
                    ? "from-cyan-50 to-cyan-100 border-cyan-200"
                    : service.color === "red"
                    ? "from-red-50 to-red-100 border-red-200"
                    : service.color === "blue"
                    ? "from-blue-50 to-blue-100 border-blue-200"
                    : "from-green-50 to-green-100 border-green-200"
                } border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${
                      service.color === "cyan"
                        ? "bg-cyan-500 text-white"
                        : service.color === "red"
                        ? "bg-red-500 text-white"
                        : service.color === "blue"
                        ? "bg-blue-500 text-white"
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
                            service.color === "cyan"
                              ? "bg-cyan-500"
                              : service.color === "red"
                              ? "bg-red-500"
                              : service.color === "blue"
                              ? "bg-blue-500"
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
                          service.color === "cyan"
                            ? "bg-cyan-200 text-cyan-800"
                            : service.color === "red"
                            ? "bg-red-200 text-red-800"
                            : service.color === "blue"
                            ? "bg-blue-200 text-blue-800"
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
                            service.color === "cyan"
                              ? "bg-cyan-500"
                              : service.color === "red"
                              ? "bg-red-500"
                              : service.color === "blue"
                              ? "bg-blue-500"
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
                    href="/contact?service=it-consulting"
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      service.color === "cyan"
                        ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                        : service.color === "red"
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : service.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
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
                Why Choose Trust Solutions for IT Consulting?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center mr-4 mt-1">
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
                      Expert Technical Team
                    </h3>
                    <p className="text-gray-600">
                      Our certified IT professionals bring years of experience
                      across diverse technologies and industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center mr-4 mt-1">
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
                      Proactive Approach
                    </h3>
                    <p className="text-gray-600">
                      We don&apos;t just fix problems—we prevent them with
                      proactive monitoring and maintenance strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center mr-4 mt-1">
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
                      Scalable Solutions
                    </h3>
                    <p className="text-gray-600">
                      Our IT solutions grow with your business, ensuring you
                      always have the technology infrastructure you need.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center mr-4 mt-1">
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
                      24/7 Support
                    </h3>
                    <p className="text-gray-600">
                      Round-the-clock technical support ensures your business
                      operations never skip a beat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-cyan-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Ready to Transform Your IT Infrastructure?
              </h3>
              <p className="mb-6">
                Let&apos;s discuss how our IT consulting services can help you
                leverage technology to drive business growth, improve
                efficiency, and stay ahead of the competition.
              </p>
              <Link
                href="/contact?service=it-consulting"
                className="inline-block bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200"
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
              IT Consulting Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest insights on technology trends,
              cybersecurity, and IT best practices.
            </p>
          </div>

          {itPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No IT consulting posts available at the moment.
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-200 font-medium text-lg"
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
        title="Ready to Elevate Your **Technology Infrastructure**?"
        subtitle="Let's discuss how our IT consulting services can help you leverage technology for competitive advantage and business growth."
        primaryButtonText="Get Started Today"
        secondaryButtonText="Learn More About Us"
        service="it-consulting"
      />
    </Layout>
  );
}
