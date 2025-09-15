"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/Badge"
import { Users, TrendingUp, ArrowRight, Sparkles, Star } from "lucide-react"

export function TestHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated Background Image 1 - Main Business Team */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-65 animate-pulse [animation-duration:8s] animate-fade-in [animation-duration:3s] brightness-130 contrast-130 saturate-120 drop-shadow-2xl" />
        
        {/* Animated Background Image 2 - Professional Presentation */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-55 animate-pulse [animation-duration:12s] [animation-delay:2s] animate-fade-in [animation-duration:3s] [animation-delay:1s] brightness-130 contrast-130 saturate-120 drop-shadow-2xl" />
        
        {/* Animated Background Image 3 - Modern Workspace */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-48 animate-pulse [animation-duration:10s] [animation-delay:4s] animate-fade-in [animation-duration:3s] [animation-delay:2s] brightness-130 contrast-130 saturate-120 drop-shadow-2xl" />
        
        {/* Animated Background Image 4 - Business Strategy Meeting */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40 animate-pulse [animation-duration:14s] [animation-delay:6s] animate-fade-in [animation-duration:3s] [animation-delay:3s] brightness-130 contrast-130 saturate-120 drop-shadow-2xl" />
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-xl animate-bounce [animation-duration:3s] animate-fade-in [animation-duration:2s] hover:scale-150 transition-transform duration-1000" />
      <div className="absolute top-1/4 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-full blur-2xl animate-pulse [animation-duration:4s] [animation-delay:1s] animate-fade-in [animation-duration:2s] [animation-delay:0.5s] hover:scale-125 transition-transform duration-1000" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-xl animate-bounce [animation-duration:5s] [animation-delay:2s] animate-fade-in [animation-duration:2s] [animation-delay:1s] hover:scale-150 transition-transform duration-1000" />
      <div className="absolute bottom-1/3 right-10 w-16 h-16 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-lg animate-pulse [animation-duration:6s] [animation-delay:3s] animate-fade-in [animation-duration:2s] [animation-delay:1.5s] hover:scale-125 transition-transform duration-1000" />
      
      {/* Additional Animated Background Elements */}
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-gradient-to-r from-green-400/15 to-emerald-400/15 rounded-full blur-3xl animate-spin [animation-duration:20s] animate-fade-in [animation-duration:3s] [animation-delay:2s]" />
      <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl animate-bounce [animation-duration:7s] [animation-delay:4s] animate-fade-in [animation-duration:2s] [animation-delay:2.5s]" />
      <div className="absolute top-1/3 left-1/4 w-36 h-36 bg-gradient-to-r from-pink-400/18 to-rose-400/18 rounded-full blur-3xl animate-pulse [animation-duration:9s] [animation-delay:5s] animate-fade-in [animation-duration:2s] [animation-delay:3s]" />

      {/* Animated Sparkle Dots */}
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping [animation-duration:2s] animate-fade-in [animation-duration:1s] hover:scale-200 transition-transform duration-300" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-500 rounded-full animate-ping [animation-duration:3s] [animation-delay:1s] animate-fade-in [animation-duration:1s] [animation-delay:0.5s] hover:scale-300 transition-transform duration-300" />
      <div className="absolute bottom-1/2 left-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping [animation-duration:4s] [animation-delay:2s] animate-fade-in [animation-duration:1s] [animation-delay:1s] hover:scale-250 transition-transform duration-300" />
      <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-purple-500 rounded-full animate-ping [animation-duration:2.5s] [animation-delay:3s] animate-fade-in [animation-duration:1s] [animation-delay:1.5s] hover:scale-300 transition-transform duration-300" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-500 rounded-full animate-ping [animation-duration:3.5s] [animation-delay:4s] animate-fade-in [animation-duration:1s] [animation-delay:2s] hover:scale-200 transition-transform duration-300" />
      <div className="absolute top-2/3 right-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping [animation-duration:2.8s] [animation-delay:5s] animate-fade-in [animation-duration:1s] [animation-delay:2.5s] hover:scale-250 transition-transform duration-300" />

      {/* Enhanced Gradient Overlay with more sophisticated animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/30 to-indigo-900/35 animate-pulse [animation-duration:12s] animate-fade-in [animation-duration:4s]" />

      {/* Large Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-spin [animation-duration:20s] animate-fade-in [animation-duration:3s] [animation-delay:1s] hover:scale-110 transition-transform duration-2000" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/12 to-blue-400/12 rounded-full blur-3xl animate-spin [animation-duration:25s] [animation-delay:5s] [animation-direction:reverse] animate-fade-in [animation-duration:3s] [animation-delay:2s] hover:scale-105 transition-transform duration-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-indigo-400/8 to-purple-400/8 rounded-full blur-3xl animate-pulse [animation-duration:15s] [animation-delay:8s] animate-fade-in [animation-duration:4s] [animation-delay:3s] hover:scale-110 transition-transform duration-2000" />
      
      {/* Additional Large Background Elements */}
      <div className="absolute top-1/6 right-1/6 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-bounce [animation-duration:12s] [animation-delay:6s] animate-fade-in [animation-duration:3s] [animation-delay:4s] hover:scale-125 transition-transform duration-2000" />
      <div className="absolute bottom-1/6 left-1/6 w-72 h-72 bg-gradient-to-r from-rose-400/12 to-pink-400/12 rounded-full blur-3xl animate-pulse [animation-duration:18s] [animation-delay:10s] animate-fade-in [animation-duration:3s] [animation-delay:5s] hover:scale-105 transition-transform duration-2000" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Main Hero Content */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-3 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 border border-blue-400/30 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce [animation-duration:2s] [animation-delay:1s] hover:animate-pulse"
          >
            <Sparkles className="w-4 h-4 mr-2 fill-current animate-spin [animation-duration:3s]" />
            Excellence • Integrity • Client-Centricity
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 hover:scale-105 transition-transform duration-500 hover:animate-pulse">
            Trust Solutions Company
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-200 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 hover:scale-105 transition-transform duration-500">
            Rwanda&apos;s Premier One-Stop Solutions Partner
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 text-pretty leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 hover:text-white transition-colors duration-300 hover:scale-105">
            Strategic Business Consulting • Real Estate Brokerage • Creative Event Planning. 
            One trusted partner for all your professional needs in Kigali and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <Button
              size="lg"
              className="group px-10 py-5 text-lg font-semibold !bg-blue-600 hover:!bg-blue-700 !text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-0 animate-pulse [animation-duration:3s]"
              asChild
            >
              <a href="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 animate-bounce [animation-duration:2s]" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-5 text-lg font-semibold border-2 border-blue-600 hover:border-blue-700 hover:bg-blue-50 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-110 shadow-lg hover:shadow-xl !text-blue-600 hover:animate-pulse"
              asChild
            >
              <a href="/about">
                Learn More
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
            <div className="group flex flex-col items-center gap-2 hover:scale-125 transition-all duration-500 cursor-pointer animate-bounce [animation-duration:2s] [animation-delay:0.5s] hover:animate-none bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-4 bg-gradient-to-br from-primary/40 to-cyan-500/40 rounded-full group-hover:from-primary/60 group-hover:to-cyan-500/60 transition-all duration-500 group-hover:rotate-12 shadow-xl group-hover:shadow-2xl animate-pulse [animation-duration:4s] group-hover:animate-spin [animation-duration:1s]">
                  <Users className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300 animate-bounce [animation-duration:3s] [animation-delay:1s]" />
                </div>
                <span className="text-6xl font-black text-white drop-shadow-2xl group-hover:text-accent transition-colors duration-500 animate-pulse [animation-duration:2s] [animation-delay:0.8s]">
                  3
                </span>
              </div>
              <span className="text-lg font-semibold text-white drop-shadow-lg group-hover:text-accent transition-colors duration-300 animate-fade-in-up [animation-duration:1s] [animation-delay:1.2s]">
                Core Services
              </span>
            </div>

            <div className="hidden sm:block w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse [animation-duration:3s] animate-ping [animation-duration:2s] [animation-delay:1s]" />

            <div className="group flex flex-col items-center gap-2 hover:scale-125 transition-all duration-500 cursor-pointer animate-bounce [animation-duration:2s] [animation-delay:1s] hover:animate-none bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-4 bg-gradient-to-br from-primary/40 to-cyan-500/40 rounded-full group-hover:from-primary/60 group-hover:to-cyan-500/60 transition-all duration-500 group-hover:rotate-12 shadow-xl group-hover:shadow-2xl animate-pulse [animation-duration:5s] [animation-delay:1s] group-hover:animate-spin [animation-duration:1s]">
                  <TrendingUp className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300 animate-bounce [animation-duration:3s] [animation-delay:1.5s]" />
                </div>
                <span className="text-6xl font-black text-white drop-shadow-2xl group-hover:text-accent transition-colors duration-500 animate-pulse [animation-duration:2s] [animation-delay:1.3s]">
                  100%
                </span>
              </div>
              <span className="text-lg font-semibold text-white drop-shadow-lg group-hover:text-accent transition-colors duration-300 animate-fade-in-up [animation-duration:1s] [animation-delay:1.7s]">
                Client Focus
              </span>
            </div>

            <div className="hidden sm:block w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse [animation-duration:3s] animate-ping [animation-duration:2s] [animation-delay:2s]" />

            <div className="group flex flex-col items-center gap-2 hover:scale-125 transition-all duration-500 cursor-pointer animate-bounce [animation-duration:2s] [animation-delay:1.5s] hover:animate-none bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-4 bg-gradient-to-br from-primary/40 to-cyan-500/40 rounded-full group-hover:from-primary/60 group-hover:to-cyan-500/60 transition-all duration-500 group-hover:rotate-12 shadow-xl group-hover:shadow-2xl animate-pulse [animation-duration:6s] [animation-delay:2s] group-hover:animate-spin [animation-duration:1s]">
                  <Star className="w-8 h-8 text-white fill-current group-hover:scale-110 transition-transform duration-300 animate-spin [animation-duration:4s] animate-bounce [animation-duration:3s] [animation-delay:2s]" />
                </div>
                <span className="text-6xl font-black text-white drop-shadow-2xl group-hover:text-accent transition-colors duration-500 animate-pulse [animation-duration:2s] [animation-delay:1.8s]">
                  24/7
                </span>
              </div>
              <span className="text-lg font-semibold text-white drop-shadow-lg group-hover:text-accent transition-colors duration-300 animate-fade-in-up [animation-duration:1s] [animation-delay:2.2s]">
                Support
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 opacity-60 animate-fade-in-up [animation-duration:2s] [animation-delay:3s]">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce [animation-duration:1s] hover:animate-ping [animation-duration:0.5s] cursor-pointer" />
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.2s] hover:animate-ping [animation-duration:0.5s] cursor-pointer" />
          <div className="w-4 h-4 bg-indigo-400 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.4s] hover:animate-ping [animation-duration:0.5s] cursor-pointer" />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.6s] hover:animate-ping [animation-duration:0.5s] cursor-pointer" />
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.8s] hover:animate-ping [animation-duration:0.5s] cursor-pointer" />
        </div>
      </div>

      {/* Vertical CTA Bar - From Original Hero */}
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-b from-accent/90 to-accent/70 flex-col items-center justify-center shadow-2xl z-40 animate-fade-in-right [animation-duration:2s] [animation-delay:1s]">
        <a
          href="/contact"
          className="flex flex-col items-center justify-center group cursor-pointer h-40 w-full hover:bg-accent/80 transition-colors duration-300 animate-pulse [animation-duration:4s] [animation-delay:2s] hover:animate-none"
        >
          <span className="flex flex-col items-center transform -rotate-90 whitespace-nowrap text-center text-primary font-black text-lg tracking-wider group-hover:text-accent animate-bounce [animation-duration:3s] [animation-delay:2.5s] group-hover:animate-pulse [animation-duration:1s]">
            <svg className="w-6 h-6 mb-1 animate-bounce [animation-duration:2s] [animation-delay:3s] group-hover:animate-spin [animation-duration:1s]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.5 19.5l19-7-7 19-2.5-7-7-2.5z" />
            </svg>
            GET STARTED TODAY
          </span>
        </a>
        
        {/* Social Icons */}
        <div className="absolute top-8 flex flex-col space-y-4 items-center w-full animate-fade-in-up [animation-duration:1.5s] [animation-delay:3s]">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors duration-300 animate-bounce [animation-duration:2s] [animation-delay:3.5s] hover:animate-pulse [animation-duration:1s]"
            aria-label="LinkedIn"
          >
            <svg className="w-7 h-7 hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors duration-300 animate-bounce [animation-duration:2s] [animation-delay:4s] hover:animate-pulse [animation-duration:1s]"
            aria-label="Twitter"
          >
            <svg className="w-7 h-7 hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 002.457-2.548z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-4 sm:h-8 md:h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-30"></div>
    </section>
  )
}

export default TestHero
