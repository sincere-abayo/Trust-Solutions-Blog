import Layout from "@/components/layout/Layout";
import CTA from "@/components/ui/CTA";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/data/blogPosts";
import Link from "next/link";

export default function EventsPage() {
  const allPosts = getAllPosts();
  const eventPosts = allPosts.filter(
    (post) => post.category.toLowerCase() === "events"
  );

  const services = [
    {
      title: "Corporate Events",
      description:
        "Professional conferences, product launches, and team building events",
      longDescription:
        "Elevate your business with professionally managed corporate events. From strategic conferences to impactful product launches, we create experiences that engage audiences and drive business results.",
      features: [
        "Conference & Meeting Planning",
        "Product Launch Coordination",
        "Team Building Activities",
        "Corporate Retreats",
        "Award Ceremonies",
      ],
      benefits: [
        "Enhanced brand image",
        "Increased engagement",
        "Professional networking",
        "Team cohesion",
      ],
      process: [
        "Event Strategy Planning",
        "Venue & Vendor Selection",
        "Event Execution",
        "Post-Event Analysis",
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "purple",
    },
    {
      title: "Weddings & Celebrations",
      description:
        "Magical weddings, anniversaries, and milestone celebrations",
      longDescription:
        "Create unforgettable moments with our comprehensive wedding and celebration planning services. From intimate ceremonies to grand celebrations, we bring your vision to life with attention to every detail.",
      features: [
        "Wedding Planning & Coordination",
        "Anniversary Celebrations",
        "Birthday & Milestone Events",
        "Engagement Parties",
        "Bridal & Baby Showers",
      ],
      benefits: [
        "Stress-free planning",
        "Perfect execution",
        "Memorable experiences",
        "Professional coordination",
      ],
      process: [
        "Vision Development",
        "Vendor Coordination",
        "Timeline Management",
        "Day-of Execution",
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      color: "pink",
    },
    {
      title: "Special Occasions",
      description:
        "Custom events for birthdays, graduations, and unique celebrations",
      longDescription:
        "Make every special occasion extraordinary with our personalized event planning services. Whether it's a milestone birthday, graduation party, or unique celebration, we create custom experiences that reflect your personality.",
      features: [
        "Custom Theme Development",
        "Venue Transformation",
        "Entertainment Coordination",
        "Catering Management",
        "Photography & Videography",
      ],
      benefits: [
        "Personalized experiences",
        "Creative themes",
        "Professional execution",
        "Lasting memories",
      ],
      process: [
        "Concept Creation",
        "Design & Planning",
        "Vendor Management",
        "Event Execution",
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
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
      color: "orange",
    },
    {
      title: "Event Consultation",
      description:
        "Expert advice and planning support for DIY event organizers",
      longDescription:
        "Get professional guidance for your self-managed events. Our consultation services provide expert advice, planning templates, and ongoing support to ensure your DIY event is a success.",
      features: [
        "Event Planning Consultation",
        "Vendor Recommendations",
        "Timeline & Checklist Creation",
        "Budget Planning Assistance",
        "Troubleshooting Support",
      ],
      benefits: [
        "Professional guidance",
        "Cost-effective solution",
        "Reduced planning stress",
        "Access to expertise",
      ],
      process: [
        "Initial Consultation",
        "Planning Framework",
        "Ongoing Support",
        "Final Review",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      color: "blue",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-200 text-sm font-medium">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Over 1 Year Experience
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Creative Event Planning
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Seamless, memorable, and successful events that exceed expectations
            and create lasting impressions. Whatever your event vision, we
            provide the solution.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Event Planning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to large-scale corporate events, we
              handle every detail with creativity and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`bg-gradient-to-br ${
                  service.color === "purple"
                    ? "from-purple-50 to-purple-100 border-purple-200"
                    : service.color === "pink"
                    ? "from-pink-50 to-pink-100 border-pink-200"
                    : service.color === "blue"
                    ? "from-blue-50 to-blue-100 border-blue-200"
                    : "from-orange-50 to-orange-100 border-orange-200"
                } border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${
                      service.color === "purple"
                        ? "bg-purple-500 text-white"
                        : service.color === "pink"
                        ? "bg-pink-500 text-white"
                        : service.color === "blue"
                        ? "bg-blue-500 text-white"
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
                            service.color === "purple"
                              ? "bg-purple-500"
                              : service.color === "pink"
                              ? "bg-pink-500"
                              : service.color === "blue"
                              ? "bg-blue-500"
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
                          service.color === "purple"
                            ? "bg-purple-200 text-purple-800"
                            : service.color === "pink"
                            ? "bg-pink-200 text-pink-800"
                            : service.color === "blue"
                            ? "bg-blue-200 text-blue-800"
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
                            service.color === "purple"
                              ? "bg-purple-500"
                              : service.color === "pink"
                              ? "bg-pink-500"
                              : service.color === "blue"
                              ? "bg-blue-500"
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
                    href="/contact?service=events"
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      service.color === "purple"
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : service.color === "pink"
                        ? "bg-pink-600 hover:bg-pink-700 text-white"
                        : service.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
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
              Event Planning Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover expert tips, creative ideas, and industry insights for
              planning successful events of all sizes.
            </p>
          </div>

          {eventPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No event planning posts available at the moment.
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium text-lg"
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
        title="Ready to Create Your **Perfect Event**?"
        subtitle="Let's discuss how our event planning services can bring your vision to life and create unforgettable experiences."
        primaryButtonText="Schedule Appointment Today"
        secondaryButtonText="Learn More About Us"
        service="events"
      />
    </Layout>
  );
}
