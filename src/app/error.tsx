"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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

        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6">
            <svg
              className="w-full h-full text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            We encountered an unexpected error. Don't worry, our team has been
            notified.
          </p>
        </div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 bg-gray-800 border border-gray-700 rounded-lg p-4 text-left">
            <p className="text-sm font-mono text-red-400 break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={reset}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Go to Homepage
          </Link>
        </div>

        {/* Help Section */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 mb-4">Need help?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link
              href="/contact"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Contact Support
            </Link>
            <span className="hidden sm:inline text-gray-600">•</span>
            <Link
              href="/about"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              About Us
            </Link>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a
              href="mailto:Trustsolutions2025@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Email Us
            </a>
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
