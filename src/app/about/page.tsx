import Layout from "@/components/layout/Layout";
import CTA from "@/components/ui/CTA";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    {
      name: "Mr. Irera Jean Confiance",
      role: "Founder & Managing Director",
      bio: "Irera Jean Confiance, Founder & Managing Director, lead the company. With a deep understanding of the Rwandan market's challenges and a passion for elevating service standards, His role will be to drive the company's strategic vision, build key client relationships, and ensure that the promise of 'Trust Solutions' is delivered consistently across all departments. The initial team will be small, with plans to hire dedicated leads for each of the three service pillars as the company grows.",
      expertise: [
        "Strategic Planning",
        "Business Development",
        "Market Analysis",
      ],
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Ishimwe Jean Louis",
      role: "Real Estate Director",
      bio: "Ishimwe brings 12 years of real estate expertise, specializing in commercial properties, investment portfolios, and market trend analysis.",
      expertise: [
        "Commercial Real Estate",
        "Investment Properties",
        "Market Trends",
      ],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Abayo Sincere",
      role: "Event Planning Director",
      bio: "Abayo has orchestrated over 500 successful events, from intimate corporate gatherings to large-scale conferences and celebrations.",
      expertise: ["Corporate Events", "Wedding Planning", "Event Management"],
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      title: "Trust",
      description:
        "Building lasting relationships through transparency and reliability in everything we do.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description:
        "Delivering superior quality in everything we do, exceeding expectations at every turn.",
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
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "Embracing creative solutions and continuous improvement to solve complex challenges.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description:
        "Maintaining the highest ethical standards and operating with complete transparency.",
      icon: (
        <svg
          className="w-8 h-8 text-orange-600"
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
    },
    {
      title: "Client centricity",
      description:
        "Putting our clients' success at the center of everything we do, every single day.",
      icon: (
        <svg
          className="w-8 h-8 text-red-600"
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
    },
  ];

  const stats = [
    { number: "2025", label: "Founded" },
    { number: "50+", label: "Client Served" },
    { number: "2+", label: "Years of Experience" },
    // { number: "98%", label: "Client Satisfaction" },
    { number: "3", label: "Core Service Areas" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Trust Solutions Company
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Delivering effective, customized solutions across our three areas of
            expertise for over 2 years.
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
                  Founded in 2025, Trust Solutions Company began with a simple
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
                  clients&apos; success and our ability to adapt and expand our
                  services to meet evolving market demands.
                </p>
                <p>
                  Today, we&apos;re proud to have helped over 50 clients achieve
                  their goals, building lasting relationships based on trust,
                  results, and mutual success.
                </p>
              </div>
            </div>
            {/* To do:
                - Replace the "TS" circle with the company logo from /logo/image.png
                - Keep the rest of the card structure and content the same
                - Ensure the logo is styled to fit in a rounded, centered container
            */}
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-white-600 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo/image.png"
                    alt="Trust Solutions Company Logo"
                    width={400}
                    height={416}
                    className="w-100 h-104 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Trust Solutions Company
                </h3>
                <p className="text-gray-600 mb-6">
                  Whatever your challenge, we provide the solution.
                </p>
                <div className="grid grid-cols-4 gap-4 text-center">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-blue-600">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
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
              Our Values
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {[
                "Trust",
                "Excellence",
                "Innovation",
                "Integrity",
                "Client centricity",
              ].map((value) => (
                <span
                  key={value}
                  className="inline-block bg-blue-100 text-blue-800 text-base font-semibold px-5 py-2 rounded-full"
                >
                  {value}
                </span>
              ))}
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re driven by a clear mission and guided by core values
              that shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower individuals and businesses by providing exceptional
                consulting, real estate, and event planning services that drive
                success, create value, and build lasting relationships through
                trust, innovation, and excellence.
              </p>
              <p className="text-gray-600 mt-4">
                <strong>
                  Whatever your challenge, we provide the solution.
                </strong>
              </p>
            </div>
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
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading trusted partner for comprehensive business
                solutions, recognized for transforming challenges into
                opportunities and helping clients achieve sustainable growth and
                success in an ever-evolving marketplace.
              </p>
              <p className="text-gray-600 mt-4">
                We envision a future where every client achieves their goals
                through our expertise, innovation, and unwavering commitment to
                their success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
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
      <CTA 
      title="Interested in Working with Us."
      subtitle="Contact us today to learn more about our services and how we can help you achieve your goals."
      service="general" />
    </Layout>
  );
}
