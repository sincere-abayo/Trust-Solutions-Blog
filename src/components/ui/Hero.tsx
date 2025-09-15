import Link from "next/link";
import { Badge } from "./Badge";

const Hero = () => {

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-primary text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&crop=center")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90"></div>
      </div>

      {/* Content Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/70 z-10" aria-hidden="true"></div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 z-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 z-30">
        {/* Trust Badge */}
        <div className="mb-6 sm:mb-8">
          <Badge variant="secondary" className="text-sm sm:text-base px-4 py-2">
            Trusted by 500+ businesses across industries
          </Badge>
        </div>

        {/* Company Name and Slogan */}
        <div className="w-full text-center flex flex-col justify-center items-center mb-6 sm:mb-10">
          {/* Logo removed */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-accent drop-shadow-lg mb-2">
            Trust Solutions Company
          </h1>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-secondary mb-4 sm:mb-6 leading-tight">
            We exist to solve <span className="block text-white font-light">your challenges.</span>
          </h2>
        </div>
        {/* Main Content */}
        <div className="w-full text-center flex flex-col justify-center items-center">
          <p className="text-base sm:text-lg md:text-2xl text-secondary mb-6 max-w-2xl mx-auto leading-relaxed font-light">
            Our mission is to provide comprehensive solutions across business consulting, real estate, and event planning — giving you the tools and expertise to overcome obstacles and achieve your goals.
          </p>
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mb-6">
            <Link
              href="/contact"
              className="bg-accent text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-base sm:text-xl hover:bg-white hover:text-accent transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transform hover:scale-105 border-2 border-accent"
            >
              GET STARTED TODAY
            </Link>
            <Link
              href="/about"
              className="bg-white/20 border-2 border-secondary text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-base sm:text-xl hover:bg-secondary hover:text-primary transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transform hover:scale-105"
            >
              LEARN MORE
            </Link>
          </div>
          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-secondary text-base sm:text-lg mb-2 font-semibold tracking-wide">
              Trusted by businesses across industries
            </p>
            <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-6 opacity-90">
              <div className="text-lg sm:text-2xl font-black text-white">500+</div>
              <div className="text-lg sm:text-2xl font-black text-accent">•</div>
              <div className="text-lg sm:text-2xl font-black text-white">15+ Years</div>
              <div className="text-lg sm:text-2xl font-black text-accent">•</div>
              <div className="text-lg sm:text-2xl font-black text-white">98% Success</div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical CTA Bar - RISE-inspired */}
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-b from-accent/90 to-accent/70 flex-col items-center justify-center shadow-2xl z-40">
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center group cursor-pointer h-40 w-full hover:bg-accent/80 transition-colors duration-300"
        >
          <span className="flex flex-col items-center transform -rotate-90 whitespace-nowrap text-center text-primary font-black text-lg tracking-wider group-hover:text-white">
            <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.5 19.5l19-7-7 19-2.5-7-7-2.5z" />
            </svg>
            GET STARTED TODAY
          </span>
        </Link>
        {/* Social Icons */}
        <div className="absolute top-8 flex flex-col space-y-4 items-center w-full">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            {/* LinkedIn Icon */}
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            {/* Twitter Icon */}
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 002.457-2.548z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-4 sm:h-8 md:h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-30"></div>
    </section>
  );
};

export default Hero;
