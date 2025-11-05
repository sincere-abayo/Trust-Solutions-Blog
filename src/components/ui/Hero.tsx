import Link from "next/link";
import { Badge } from "./Badge";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-primary text-white overflow-visible">
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
      <div
        className="absolute inset-0 bg-black/70 z-10"
        aria-hidden="true"
      ></div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 z-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative -mt-8 -sm-mt-2 -md-mt-4 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex-1 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 z-30">
        {/* Trust Badge */}
        <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center w-full">
          <Badge
            variant="secondary"
            className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 border border-blue-400/30 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce [animation-duration:2s] [animation-delay:1s] hover:animate-pulse whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 fill-current animate-spin [animation-duration:3s]" />
            <span className="hidden sm:inline">
              Excellence • Integrity • Client-Centricity
            </span>
            <span className="sm:hidden">
              Excellence • Integrity • Client-Centricity
            </span>
          </Badge>
        </div>

        {/* Company Name and Slogan */}
        <div className="w-full text-center flex flex-col justify-center items-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-balance mb-2 sm:mb-1 md:mb-3 lg:mb-5 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 hover:scale-105 transition-transform duration-500 hover:animate-pulse">
            Trust Solutions Company
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-balance mb-4 sm:mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 hover:scale-105 transition-transform duration-500">
            <span className="block sm:inline">Rwanda&apos;s Premier</span>
            <span className="block sm:inline sm:ml-2">
              One-Stop Solutions Partner
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-200 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 text-pretty leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 hover:text-white transition-colors duration-300 hover:scale-105">
            {/* services */}
            <span className="block sm:inline">
              Strategic Business Consulting • IT Consulting • Real Estate
              Brokerage • Event Planning, Catering & Management.
            </span>
            {/* sub slogan */}
            <span className="block mt-3 sm:mt-1">
              One trusted partner for all your professional needs in Kigali and
              beyond.
            </span>
          </p>
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center mb-8 sm:mb-10 md:mb-12 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <Link
              href="/contact"
              className="bg-accent text-primary px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-xl font-black text-base sm:text-lg md:text-xl lg:text-2xl hover:bg-white hover:text-black transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transform hover:scale-105 border-2 border-accent text-center whitespace-nowrap"
            >
              <span className="hidden sm:inline">GET STARTED TODAY</span>
              <span className="sm:hidden">GET STARTED</span>
            </Link>
            <Link
              href="/about"
              className="bg-white/20 border-2 border-white text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-xl font-black text-base sm:text-lg md:text-xl lg:text-2xl hover:bg-white hover:text-black transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transform hover:scale-105 text-center whitespace-nowrap"
            >
              LEARN MORE
            </Link>
          </div>
          {/* Professional Stat Cards */}
          <div className="flex flex-col xs:flex-row sm:flex-row items-center justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 text-center mb-6 sm:mb-8 w-full max-w-sm xs:max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
            <div className="group flex flex-col items-center gap-1.5 xs:gap-2 hover:scale-105 transition-all duration-300 cursor-pointer bg-black/40 backdrop-blur-md rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 border border-white/30 shadow-2xl w-full xs:min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px]">
              <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                <div className="p-2 xs:p-2.5 sm:p-3 bg-gradient-to-br from-blue-500/60 to-cyan-500/60 rounded-full shadow-xl">
                  <svg
                    className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white"
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
                </div>
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl [text-shadow:_4px_4px_8px_rgb(0_0_0_/_90%)]">
                  4
                </span>
              </div>
              <span className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-white drop-shadow-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
                Core Services
              </span>
            </div>

            <div className="hidden xs:block w-px h-12 sm:h-16 bg-gradient-to-b from-transparent via-white/70 to-transparent" />

            <div className="group flex flex-col items-center gap-1.5 xs:gap-2 hover:scale-105 transition-all duration-300 cursor-pointer bg-black/40 backdrop-blur-md rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 border border-white/30 shadow-2xl w-full xs:min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px]">
              <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                <div className="p-2 xs:p-2.5 sm:p-3 bg-gradient-to-br from-green-500/60 to-emerald-500/60 rounded-full shadow-xl">
                  <svg
                    className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white"
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
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl [text-shadow:_4px_4px_8px_rgb(0_0_0_/_90%)]">
                  100%
                </span>
              </div>
              <span className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-white drop-shadow-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
                Client centricity
              </span>
            </div>

            <div className="hidden xs:block w-px h-12 sm:h-16 bg-gradient-to-b from-transparent via-white/70 to-transparent" />

            <div className="group flex flex-col items-center gap-1.5 xs:gap-2 hover:scale-105 transition-all duration-300 cursor-pointer bg-black/40 backdrop-blur-md rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 border border-white/30 shadow-2xl w-full xs:min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[220px]">
              <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                <div className="p-2 xs:p-2.5 sm:p-3 bg-gradient-to-br from-purple-500/60 to-pink-500/60 rounded-full shadow-xl">
                  <svg
                    className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl [text-shadow:_4px_4px_8px_rgb(0_0_0_/_90%)]">
                  24/7
                </span>
              </div>
              <span className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-white drop-shadow-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
                Support
              </span>
            </div>
          </div>

          {/* Trust Indicator Text */}
          <div className="text-center mb-2 sm:mb-4">
            <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wide drop-shadow-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_60%)]">
              Trusted by businesses across industries
            </p>
          </div>
        </div>
      </div>

      {/* Vertical CTA Bar - RISE-inspired */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-12 lg:w-14 xl:w-16 2xl:w-18 bg-gradient-to-b from-accent/90 to-accent/70 flex-col items-center justify-center shadow-2xl z-40">
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center group cursor-pointer h-32 lg:h-36 xl:h-40 2xl:h-44 w-full hover:bg-accent/80 transition-colors duration-300"
        >
          <span className="flex flex-col items-center transform -rotate-90 whitespace-nowrap text-center text-primary font-black text-sm lg:text-base xl:text-lg 2xl:text-xl tracking-wider group-hover:text-black">
            <svg
              className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 mb-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.5 19.5l19-7-7 19-2.5-7-7-2.5z" />
            </svg>
            <span className="hidden xl:inline">GET STARTED TODAY</span>
            <span className="xl:hidden">GET STARTED</span>
          </span>
        </Link>
        {/* Social Icons */}
        <div className="absolute top-4 lg:top-6 xl:top-8 flex flex-col space-y-2 lg:space-y-3 xl:space-y-4 items-center w-full">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-black transition-colors duration-300"
            aria-label="LinkedIn"
          >
            {/* LinkedIn Icon */}
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-black transition-colors duration-300"
            aria-label="Twitter"
          >
            {/* Twitter Icon */}
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 002.457-2.548z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-2 xs:h-3 sm:h-4 md:h-6 lg:h-8 xl:h-10 2xl:h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-30"></div>
    </section>
  );
};

export default Hero;
