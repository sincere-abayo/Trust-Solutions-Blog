import Link from "next/link";

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
  showStats?: boolean;
  className?: string;
  service?: string; // Service type to auto-select on contact page
}

const CTA = ({
  title = "Turn Your Vision Into Reality",
  subtitle = "We craft solutions tailored to your goals. Let's create something meaningful together.",
  primaryButtonText = "Contact Us",
  secondaryButtonText = "Learn More",
  primaryButtonHref = "/contact",
  secondaryButtonHref = "/about",
  showStats = true,
  className = "",
  service = "general",
}: CTAProps) => {
  // Build contact URL with service parameter
  const contactUrl = service
    ? `${primaryButtonHref}?service=${service}`
    : primaryButtonHref;
  return (
    <section className={`relative py-20 sm:py-24 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          {title.includes("Into Reality") ? (
            <>
              Turn Your Vision{" "}
              <span className="text-primary">Into Reality</span>
            </>
          ) : (
            <span
              dangerouslySetInnerHTML={{
                __html: title.replace(
                  /\*\*(.*?)\*\*/g,
                  '<span class="text-primary">$1</span>'
                ),
              }}
            />
          )}
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href={contactUrl}
            className="bg-primary border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-900 hover:text-white hover:shadow-lg transition"
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonHref}
            className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition"
          >
            {secondaryButtonText}
          </Link>
        </div>

        {/* Trust Indicators */}
        {showStats && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <p className="text-gray-600">Core Services</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600">Client centricity</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
