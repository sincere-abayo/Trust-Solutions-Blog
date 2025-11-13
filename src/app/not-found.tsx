import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center overflow-hidden shadow-2xl">
            <Image
              src="/logo/image.png"
              alt="Trust Solutions Company Logo"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12">
          <svg
            className="w-64 h-64 mx-auto text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 mb-4">Or explore our services:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/category/business"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Business Consulting
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/category/it-consulting"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              IT Consulting
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/category/real-estate"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Real Estate
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/category/events"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Events
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/category/digital-marketing"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Digital Marketing
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>Trust Solutions Company</p>
          <p className="mt-2">
            Whatever your challenge, we provide the solution
          </p>
        </div>
      </div>
    </div>
  );
}
