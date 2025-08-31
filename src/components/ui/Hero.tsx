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
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&crop=center")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-700/80"></div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
        {/* Main Content - RISE-inspired Design */}
        <div className="text-center mb-24">
          {/* Mission Statement */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-black mb-10 leading-tight tracking-tight">
              We exist to solve
              <span className="block text-blue-200 mt-4">your challenges.</span>
            </h1>
            <p className="text-3xl md:text-4xl text-blue-100 mb-12 max-w-6xl mx-auto leading-relaxed font-light">
              Our mission is to provide comprehensive solutions across business
              consulting, real estate, and event planning - giving you the tools
              and expertise to overcome obstacles and achieve your goals.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-16 py-8 rounded-3xl font-black text-3xl hover:bg-blue-50 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:-translate-y-3 transform hover:scale-105"
            >
              GET STARTED TODAY
            </Link>
            <Link
              href="/about"
              className="border-4 border-white text-white px-16 py-8 rounded-3xl font-black text-3xl hover:bg-white hover:text-blue-900 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:-translate-y-3 transform hover:scale-105"
            >
              LEARN MORE
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-blue-200 text-2xl mb-8 font-semibold tracking-wide">
              Trusted by businesses across industries
            </p>
            <div className="flex justify-center items-center space-x-12 opacity-90">
              <div className="text-4xl font-black text-white">500+</div>
              <div className="text-4xl font-black text-blue-300">•</div>
              <div className="text-4xl font-black text-white">15+ Years</div>
              <div className="text-4xl font-black text-blue-300">•</div>
              <div className="text-4xl font-black text-white">98% Success</div>
            </div>
          </div>
        </div>

        {/* Enhanced Services Grid - RISE-inspired */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white/20 backdrop-blur-md rounded-3xl p-12 hover:bg-white/30 transition-all duration-500 hover:scale-105 border-2 border-white/40 hover:border-white/60 shadow-2xl hover:shadow-3xl"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl mb-10 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                  <div className="text-white text-2xl">{service.icon}</div>
                </div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-blue-200 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-blue-100 group-hover:text-white transition-colors duration-300 text-xl leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-blue-200 font-bold text-base tracking-wide uppercase">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Floating Testimonial Box - RISE-inspired */}
      <div className="absolute bottom-8 left-8 bg-blue-600/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-2 border-blue-400/30 max-w-sm">
        <div className="text-white">
          <p className="text-sm font-medium mb-2 text-blue-200">
            Real Trust Solutions Client
          </p>
                      <p className="text-lg font-semibold">
              &ldquo;They transformed our business strategy and helped us achieve 300%
              growth in just 18 months.&rdquo;
            </p>
          <p className="text-sm text-blue-200 mt-2">
            - Sarah Johnson, CEO TechStart Inc.
          </p>
        </div>
      </div>

      {/* Vertical CTA Bar - RISE-inspired */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-b from-blue-600 to-blue-800 flex flex-col items-center justify-center shadow-2xl">
        <div className="transform -rotate-90 whitespace-nowrap text-center">
          <div className="text-white font-black text-lg tracking-wider">
            GET STARTED
          </div>
          <div className="text-blue-200 font-bold text-sm tracking-wide">
            TODAY
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute top-8 flex flex-col space-y-4">
          <a
            href="#"
            className="text-white hover:text-blue-200 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
