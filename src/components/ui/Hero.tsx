import Link from "next/link";
import { Badge } from "./Badge";
import { Users, TrendingUp, ArrowRight, Sparkles, Star } from "lucide-react"


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

      <div className="relative w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 z-30">
        {/* Trust Badge */}
        <div className="mb-6 sm:mb-8">
       <Badge
            variant="secondary"
            className="mb-6 px-6 py-3 sm:text-lg md:text-xl px-8 font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 border border-blue-400/30 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce [animation-duration:2s] [animation-delay:1s] hover:animate-pulse"
          >
            <Sparkles className="w-4 h-4 mr-2 fill-current animate-spin [animation-duration:3s]" />
            Excellence • Integrity • Client-Centricity
          </Badge>
        </div>

        {/* Company Name and Slogan */}
        <div className="w-full text-center flex flex-col justify-center items-center mb-6 sm:mb-10">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-balance mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 hover:scale-105 transition-transform duration-500 hover:animate-pulse">
            Trust Solutions Company
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-balance mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 hover:scale-105 transition-transform duration-500">
            Rwanda&apos;s Premier One-Stop Solutions Partner
            </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 text-pretty leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 hover:text-white transition-colors duration-300 hover:scale-105">
            Strategic Business Consulting • Real Estate Brokerage • Creative Event Planning. 
            One trusted partner for all your professional needs in Kigali and beyond.
          </p>
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-accent text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-lg sm:text-2xl hover:bg-white hover:text-accent transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transform hover:scale-105 border-2 border-accent"
            >
              GET STARTED TODAY
            </Link>
            <Link
              href="/about"
              className="bg-white/20 border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-lg sm:text-2xl hover:bg-white hover:text-primary transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transform hover:scale-105"
            >
              LEARN MORE
            </Link>
          </div>
          {/* Professional Stat Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-center mb-8">
            <div className="group flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl min-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-gradient-to-br from-blue-500/60 to-cyan-500/60 rounded-full shadow-xl">
                  <svg
                    className="w-6 h-6 text-white"
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
                <span className="text-4xl sm:text-5xl font-black text-white drop-shadow-2xl [text-shadow:_4px_4px_8px_rgb(0_0_0_/_90%)]">
                  3
                </span>
              </div>
              <span className="text-base sm:text-lg font-semibold text-white drop-shadow-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
                Core Services
              </span>
            </div>

            <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-white/70 to-transparent" />

            <div className="group flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl min-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-gradient-to-br from-green-500/60 to-emerald-500/60 rounded-full shadow-xl">
                  <svg
                    className="w-6 h-6 text-white"
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
                <span className="text-4xl sm:text-5xl font-black text-white drop-shadow-2xl [text-shadow:_4px_4px_8px_rgb(0_0_0_/_90%)]">
                  100%
                </span>
              </div>
              <span className="text-base sm:text-lg font-semibold text-white drop-shadow-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
                Client Focus
              </span>
            </div>

            <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-white/70 to-transparent" />

            <div className="group flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl min-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-gradient-to-br from-purple-500/60 to-pink-500/60 rounded-full shadow-xl">
                  <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-4xl sm:text-5xl font-black text-white drop-shadow-2xl [text-shadow:_4px_4px_8px_rgb(0_0_0_/_90%)]">
                  24/7
                </span>
              </div>
              <span className="text-base sm:text-lg font-semibold text-white drop-shadow-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_70%)]">
                Support
              </span>
            </div>
          </div>

          {/* Trust Indicator Text */}
          <div className="text-center mb-4">
            <p className="text-white text-base sm:text-xl font-semibold tracking-wide drop-shadow-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_60%)]">
              Trusted by businesses across industries
            </p>
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
            <svg
              className="w-6 h-6 mb-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
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
