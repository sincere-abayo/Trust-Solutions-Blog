import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    {
      title: "Business Consulting",
      description: "Guiding your next move with expert strategy.",
      link: "/category/business",
    },
    {
      title: "IT Consulting",
      description: "Future proofing your operations with smart technology.",
      link: "/category/it-consulting",
    },
    {
      title: "Real Estate",
      description: "Connecting you with prime property opportunities.",
      link: "/category/real-estate",
    },
    {
      title: "Event Planning",
      description: "Creating seamless, memorable experiences.",
      link: "/category/events",
    },
    {
      title: "Digital Marketing",
      description: "Amplifying your brand and expanding your reach.",
      link: "/category/digital-marketing",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/#services" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logo/image.png"
                alt="Trust Solutions Company"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
              <span className="ml-3 text-2xl font-bold">
                Trust Solutions Company
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Delivering effective, customized solutions across our five areas
              of expertise: Strategic Business Consulting, IT Consulting, Real
              Estate Brokerage, Event Planning, and Digital Marketing.
            </p>
            <div className="mb-4">
              <p className="text-blue-400 font-semibold text-sm mb-2">
                Built on Trust, Excellence & Innovation
              </p>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Learn about our Mission & Values →
              </Link>
            </div>
            {/* Social Media Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/trust-solutions-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/trustsolutionsco?igsh=enpvYzhuandwZzl1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href="https://x.com/trustsolutionsc?t=srr9IXLwUEIi_oa1LHkCPg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Follow us on X"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service.title} className="group">
                  <Link
                    href={service.link}
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    {service.title}
                  </Link>
                  <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-400 mt-0.5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300">
                  KG 16 Ave, Kigali City, Rwanda
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-300">0722490045</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-300">
                  trustsolutions2025@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Trust Solutions Company. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Whatever your challenge, we provide the solution.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
