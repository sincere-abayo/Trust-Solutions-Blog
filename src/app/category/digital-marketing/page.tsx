import Layout from "@/components/layout/Layout";
import CTA from "@/components/ui/CTA";
import Link from "next/link";

export default function DigitalMarketingPage() {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Build and engage your audience across social platforms",
      features: [
        "Social Media Strategy Development",
        "Content Creation & Curation",
        "Community Management",
        "Paid Social Advertising",
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
    },
    {
      title: "Search Engine Optimization",
      description: "Improve visibility and rank higher in search results",
      features: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Link Building Campaigns",
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
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that drives engagement",
      features: [
        "Content Strategy Development",
        "Blog Writing & Management",
        "Video Content Production",
        "Email Marketing Campaigns",
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
    },
    {
      title: "Paid Advertising (PPC)",
      description: "Maximize ROI with targeted paid advertising campaigns",
      features: [
        "Campaign Strategy & Planning",
        "Ad Creation & Copywriting",
        "Audience Targeting",
        "Conversion Tracking & Optimization",
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
              Digital Marketing Services
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Amplifying Your Brand and Expanding Your Reach
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-5">
              Strategic digital marketing that drives growth and delivers
              measurable results.
            </p>
            <Link
              href="/contact?service=digital-marketing"
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
              Our Digital Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions that help your business
              thrive online
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
                    title: "Data-Driven Strategies",
                    description:
                      "We use analytics and insights to create campaigns that deliver measurable results and ROI.",
                  },
                  {
                    title: "Multi-Channel Expertise",
                    description:
                      "From social media to SEO, we excel across all digital marketing channels.",
                  },
                  {
                    title: "Creative Excellence",
                    description:
                      "Our creative team produces compelling content that resonates with your audience.",
                  },
                  {
                    title: "Transparent Reporting",
                    description:
                      "Regular reports and insights keep you informed about campaign performance and ROI.",
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
                Ready to Amplify Your Brand?
              </h3>
              <p className="text-blue-100 mb-8 text-lg">
                Let&apos;s discuss how our digital marketing services can help
                you expand your reach and drive measurable business growth.
              </p>
              <Link
                href="/contact?service=digital-marketing"
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
        title="Ready to Grow Your **Digital Presence**?"
        subtitle="Let's discuss how our digital marketing services can help you amplify your brand and expand your reach."
        primaryButtonText="Get Started Today"
        secondaryButtonText="Learn More About Us"
        service="digital-marketing"
      />
    </Layout>
  );
}
