import Link from "next/link";

const Hero = () => {
  const services = [
    {
      title: "Strategic Business Consulting",
      description:
        "Expert advisory solutions to help your business grow and thrive",
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
      href: "/category/business",
    },
    {
      title: "Real Estate Brokerage",
      description: "Practical solutions for all your property needs",
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
      href: "/category/real-estate",
    },
    {
      title: "Creative Event Planning",
      description: "Seamless, memorable, and successful events",
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
      href: "/category/events",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* Main Content - RISE-inspired Design */}
        <div className="text-center mb-20">
          {/* Mission Statement */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
              We exist to solve
              <span className="block text-blue-200 mt-2">your challenges.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-10 max-w-5xl mx-auto leading-relaxed font-light">
              Our mission is to provide comprehensive solutions across business
              consulting, real estate, and event planning - giving you the tools
              and expertise to overcome obstacles and achieve your goals.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transform"
            >
              GET STARTED TODAY
            </Link>
            <Link
              href="/about"
              className="border-3 border-white text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transform"
            >
              LEARN MORE
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-blue-200 text-xl mb-6 font-medium">
              Trusted by businesses across industries
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-80">
              <div className="text-3xl font-black">500+</div>
              <div className="text-3xl font-black">•</div>
              <div className="text-3xl font-black">15+ Years</div>
              <div className="text-3xl font-black">•</div>
              <div className="text-3xl font-black">98% Success</div>
            </div>
          </div>
        </div>

        {/* Enhanced Services Grid - RISE-inspired */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white/15 backdrop-blur-md rounded-2xl p-10 hover:bg-white/25 transition-all duration-500 hover:scale-105 border-2 border-white/30 hover:border-white/50 shadow-2xl hover:shadow-3xl"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mb-8 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-blue-100 group-hover:text-white transition-colors duration-300 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-blue-200 font-semibold text-sm tracking-wide uppercase">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
