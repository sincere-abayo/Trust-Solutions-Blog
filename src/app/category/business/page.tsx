import Layout from "@/components/layout/Layout";
import CTA from "@/components/ui/CTA";
import Link from "next/link";

export default function BusinessCategoryPage() {
  const services = [
    {
      title: "Strategic Planning",
      description:
        "Comprehensive business strategy development and implementation",
      features: [
        "Vision & Mission Development",
        "SWOT Analysis & Gap Assessment",
        "Strategic Roadmap Creation",
        "KPI & Metrics Framework",
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
    },
    {
      title: "Market Analysis",
      description: "In-depth market research and competitive intelligence",
      features: [
        "Industry Trend Analysis",
        "Competitor Intelligence",
        "Customer Behavior Studies",
        "Market Size & Segmentation",
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
    },
    {
      title: "Business Development",
      description: "Growth strategies and market expansion planning",
      features: [
        "Growth Strategy Development",
        "Market Entry Planning",
        "Partnership & Alliance Strategy",
        "Revenue Model Optimization",
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
    },
    {
      title: "Performance Optimization",
      description: "Process improvement and operational efficiency",
      features: [
        "Process Analysis & Mapping",
        "Efficiency Optimization",
        "Cost Reduction Strategies",
        "Quality Improvement",
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
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Consistent Design */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8 md:py-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Strategic Business Consulting
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Guiding Your Next Move with Expert Strategy
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-5">
              Strategic planning and advisory solutions to help your business
              grow and thrive in today&apos;s competitive market.
            </p>
            <Link
              href="/contact?service=business"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Get Started
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

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Our Business Consulting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to help your business succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0"
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
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Trust Solutions?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Proven Track Record",
                    description:
                      "Over 2 years of helping businesses achieve sustainable growth and market leadership.",
                  },
                  {
                    title: "Customized Solutions",
                    description:
                      "Every business is unique. We develop tailored strategies that align with your specific goals.",
                  },
                  {
                    title: "Expert Team",
                    description:
                      "Our consultants bring deep industry knowledge and practical experience to every engagement.",
                  },
                  {
                    title: "Ongoing Support",
                    description:
                      "We don't just create plans—we help implement them and provide ongoing guidance for success.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
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
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-blue-100 mb-8 text-lg">
                Let&apos;s discuss how our strategic consulting services can
                help you overcome challenges and achieve your business
                objectives.
              </p>
              <Link
                href="/contact?service=business"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold shadow-lg"
              >
                Schedule Consultation
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
