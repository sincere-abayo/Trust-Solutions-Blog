import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Business Strategy Director",
      bio: "With over 15 years of experience in strategic business consulting, Sarah has helped hundreds of companies achieve sustainable growth and market leadership.",
      expertise: [
        "Strategic Planning",
        "Business Development",
        "Market Analysis",
      ],
      image: "/images/team/sarah-johnson.jpg",
    },
    {
      name: "Michael Chen",
      role: "Real Estate Director",
      bio: "Michael brings 12 years of real estate expertise, specializing in commercial properties, investment portfolios, and market trend analysis.",
      expertise: [
        "Commercial Real Estate",
        "Investment Properties",
        "Market Trends",
      ],
      image: "/images/team/michael-chen.jpg",
    },
    {
      name: "Amanda Rodriguez",
      role: "Event Planning Director",
      bio: "Amanda has orchestrated over 500 successful events, from intimate corporate gatherings to large-scale conferences and celebrations.",
      expertise: ["Corporate Events", "Wedding Planning", "Event Management"],
      image: "/images/team/amanda-rodriguez.jpg",
    },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in every project, delivering results that exceed expectations.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
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
    },
    {
      title: "Innovation",
      description:
        "We embrace innovative solutions and creative approaches to solve complex challenges.",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
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
    },
    {
      title: "Integrity",
      description:
        "We operate with the highest ethical standards, building trust through transparency and honesty.",
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
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
    },
    {
      title: "Partnership",
      description:
        "We believe in building long-term partnerships based on mutual success and shared goals.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "500+", label: "Successful Projects" },
    { number: "15+", label: "Years of Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3", label: "Core Service Areas" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Trust Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Delivering effective, customized solutions across our three areas of
            expertise for over 15 years.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009, Trust Solutions Company began with a simple
                  yet powerful mission: to provide comprehensive solutions to
                  businesses and individuals facing complex challenges.
                </p>
                <p>
                  What started as a small business consulting firm has grown
                  into a multi-service organization that addresses the diverse
                  needs of our clients across three core areas: Strategic
                  Business Consulting, Real Estate Brokerage, and Event
                  Planning.
                </p>
                <p>
                  Our growth has been driven by our unwavering commitment to our
                  clients' success and our ability to adapt and expand our
                  services to meet evolving market demands.
                </p>
                <p>
                  Today, we're proud to have helped over 500 clients achieve
                  their goals, building lasting relationships based on trust,
                  results, and mutual success.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">TS</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Trust Solutions Company
                </h3>
                <p className="text-gray-600 mb-6">
                  Whatever your challenge, we provide the solution.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">2009</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Clients Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by a clear mission and guided by core values that
              shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg">
                To deliver effective, customized solutions across our three
                areas of expertise: Strategic Business Consulting, comprehensive
                Real Estate Brokerage, and creative Event Planning.
              </p>
              <p className="text-gray-600 mt-4">
                <strong>
                  Whatever your challenge, we provide the solution.
                </strong>
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg">
                To be the trusted partner of choice for businesses and
                individuals seeking comprehensive solutions to their most
                complex challenges.
              </p>
              <p className="text-gray-600 mt-4">
                We envision a future where every client achieves their goals
                through our expertise, innovation, and unwavering commitment to
                their success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of professionals brings together expertise
              from all three service areas to provide comprehensive solutions
              for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-xl p-8 text-center"
              >
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-600 text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-2"
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
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how Trust Solutions can help you achieve your goals
            and overcome your challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
