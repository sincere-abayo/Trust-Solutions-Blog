"use client";

import Layout from "@/components/layout/Layout";
import CTA from "@/components/ui/CTA";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const team = [
    {
      name: "Mr. Irera Jean Confiance",
      role: "Founder & Managing Director",
      bio: "Irera Jean Confiance, Founder & Managing Director, lead the company. With a deep understanding of the Rwandan market's challenges and a passion for elevating service standards, His role will be to drive the company's strategic vision, build key client relationships, and ensure that the promise of 'Trust Solutions' is delivered consistently across all departments.",
      expertise: [
        "Strategic Planning",
        "Business Development",
        "Market Analysis",
      ],
    },
    {
      name: "Ishimwe Jean Louis",
      role: "Real Estate Director",
      bio: "Ishimwe brings 4 years of real estate expertise, specializing in commercial properties, investment portfolios, and market trend analysis.",
      expertise: [
        "Commercial Real Estate",
        "Investment Properties",
        "Market Trends",
      ],
    },
    {
      name: "Abayo Sincere",
      role: "IT Director",
      bio: "Abayo brings two years of experience as an IT Director, specializing in managing and overseeing technical infrastructure and IT systems.",
      expertise: [
        "IT Infrastructure Management",
        "Technical Support",
        "System Administration",
      ],
    },
  ];

  const values = [
    {
      title: "Trust",
      description:
        "Building lasting relationships through transparency and reliability.",
    },
    {
      title: "Excellence",
      description: "Delivering superior quality in everything we do.",
    },
    {
      title: "Innovation",
      description: "Embracing creative solutions and continuous improvement.",
    },
    {
      title: "Integrity",
      description: "Maintaining the highest ethical standards.",
    },
    {
      title: "Client Centricity",
      description: "Putting our clients' success at the center of everything.",
    },
  ];

  const stats = [
    { number: "2025", label: "Founded" },
    { number: "50+", label: "Clients Served" },
    { number: "5", label: "Core Services" },
    { number: "RDB", label: "Registered" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About Trust Solutions Company Ltd
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Rwanda&apos;s premier one-stop professional partner, delivering
            comprehensive solutions since 2025.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-6 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We are <strong>Trust Solutions Company Ltd</strong>,
                  Rwanda&apos;s premier one-stop professional partner,
                  officially registered under the Rwanda Development Board (RDB)
                  with company code <strong>149526536</strong>. Based in the
                  heart of Kigali (Remera, Gasabo District), we operate as a
                  private limited company (Ltd) dedicated to fueling business
                  success in Rwanda and beyond.
                </p>
                <p>
                  Our journey began in 2025 with a simple yet powerful mission:
                  to provide comprehensive, integrated solutions to businesses
                  and individuals facing complex challenges. What started as a
                  focused business-consulting firm has rapidly grown into a
                  multi-service organization, driven by an unwavering commitment
                  to our clients&apos; success.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden shadow-lg">
                  <Image
                    src="/logo/image.png"
                    alt="Trust Solutions Company Logo"
                    width={400}
                    height={416}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Trust Solutions Company Ltd
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  RDB Company Code: 149526536
                </p>
                <p className="text-gray-600 mb-6 font-medium">
                  Whatever your challenge, we provide the solution.
                </p>
                <div className="grid grid-cols-2 gap-6 text-center">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <div className="text-3xl font-bold text-blue-600">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Core Solutions */}
      <section className="py-4 md:py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Core Solutions: Comprehensive Support, One Trusted Brand
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From startups seeking strategic direction to established
              enterprises needing operational efficiency, we deliver innovative
              and customized solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Strategic Business Consulting",
                tagline: "Guiding your next move with expert strategy.",
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
                title: "IT Consulting",
                tagline:
                  "Future proofing your operations with smart technology.",
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Real Estate Brokerage",
                tagline: "Connecting you with prime property opportunities.",
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
              },
              {
                title: "Event Planning, Catering & Management",
                tagline: "Creating seamless, memorable experiences.",
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
              },
              {
                title: "Digital Marketing",
                tagline: "Amplifying your brand and expanding your reach.",
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
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-4 md:py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission and Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission: Solving Complex Challenges Since 2025
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our journey began in 2025 with a simple yet powerful mission: to
                provide comprehensive, integrated solutions to businesses and
                individuals facing complex challenges. What started as a focused
                business-consulting firm has rapidly grown into a multi-service
                organization, driven by an unwavering commitment to our
                clients&apos; success and an ability to adapt to evolving market
                demands.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                To be the leading trusted partner for comprehensive business
                solutions, recognized for transforming challenges into
                opportunities and helping clients achieve sustainable growth and
                success in an ever-evolving marketplace.
              </p>
              <p className="text-gray-600">
                We envision a future where every client achieves their goals
                through our expertise, innovation, and unwavering commitment to
                their success.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              {
                title: "Trust",
                description:
                  "Building lasting relationships through transparency and reliability in everything we do.",
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
                color: "blue",
              },
              {
                title: "Excellence",
                description:
                  "Delivering superior quality in everything we do, exceeding expectations at every turn.",
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
                color: "green",
              },
              {
                title: "Innovation",
                description:
                  "Embracing creative solutions and continuous improvement to solve complex challenges.",
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                color: "purple",
              },
              {
                title: "Integrity",
                description:
                  "Maintaining the highest ethical standards and operating with complete transparency.",
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
                color: "orange",
              },
              {
                title: "Client centricity",
                description:
                  "Putting our clients' success at the center of everything we do, every single day.",
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
                color: "red",
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-${value.color}-100 rounded-full mb-4 text-${value.color}-600 group-hover:bg-${value.color}-600 group-hover:text-white transition-all duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Impact & Commitment */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Impact & Commitment
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Our Growth Story
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our growth is a direct result of the trust our clients place
                    in us. Today, we are proud to have helped over{" "}
                    <strong className="text-blue-600">50 clients</strong>{" "}
                    achieve their goals, building lasting relationships based on
                    trust, measurable results, and mutual success.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
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
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Our Commitment
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We do not just offer services; we deliver{" "}
                    <strong className="text-green-600">
                      effective, customized solutions
                    </strong>{" "}
                    that empower growth, efficiency, and lasting success—all
                    under the banner of one trusted brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team brings together expertise from all service
              areas to provide comprehensive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-blue-600 text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4 text-center">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-6 text-sm">
                  {isExpanded
                    ? member.bio
                    : `${member.bio.substring(0, 120)}...`}
                  {member.bio.length > 120 && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-blue-600 hover:underline ml-1"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Interested in Working with Us?"
        subtitle="Contact us today to learn more about our services and how we can help you achieve your goals."
        service="general"
      />
    </Layout>
  );
}
