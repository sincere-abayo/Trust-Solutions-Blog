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
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        {/* Main Content */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
            Whatever Your Challenge,
            <span className="block text-blue-200 mt-2 animate-fade-in-up delay-300">
              We Provide The Solution
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-5xl mx-auto leading-relaxed animate-fade-in-up delay-500">
            Trust Solutions Company delivers effective, customized solutions
            across our three areas of expertise: Strategic Business Consulting,
            comprehensive Real Estate Brokerage, and creative Event Planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-700">
            <Link
              href="/contact"
              className="group bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transform"
            >
              Get Started Today
              <svg
                className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="group border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transform"
            >
              Learn More
              <svg
                className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-300"
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
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up delay-1000">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20 hover:border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-3"
              style={{ animationDelay: `${1200 + index * 200}ms` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-blue-100 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center animate-fade-in-up delay-1500">
          <p className="text-blue-200 text-xl mb-6 font-medium">
            Trusted by businesses across industries
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-80">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200 text-sm">Happy Clients</div>
            </div>
            <div className="text-4xl font-bold text-blue-200">•</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200 text-sm">Years Experience</div>
            </div>
            <div className="text-4xl font-bold text-blue-200">•</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-200 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
