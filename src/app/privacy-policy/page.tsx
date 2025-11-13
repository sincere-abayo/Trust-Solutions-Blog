import Layout from "../../components/layout/Layout";

export const metadata = {
  title: "Privacy Policy - Trust Solutions",
  description:
    "Privacy Policy for Trust Solutions - Your privacy and data protection are our priority.",
};

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy and data protection are our priority. Learn how we
              collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: September 29, 2025
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to Trust Solutions (&quot;we,&quot; &quot;our,&quot;
                  or &quot;us&quot;). We are committed to protecting your
                  privacy and ensuring the security of your personal
                  information. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our
                  website or use our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using our services, you agree to the
                  collection and use of information in accordance with this
                  policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Information We Collect
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Personal Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Contact us through our contact form</li>
                  <li>Subscribe to our newsletter or blog updates</li>
                  <li>Request our services or consultations</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Types of Personal Information
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>
                    Name and contact information (email, phone number, address)
                  </li>
                  <li>Company name and job title</li>
                  <li>Service preferences and requirements</li>
                  <li>Communication history and correspondence</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>IP address and browser information</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referral sources and search terms</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you about our services</li>
                  <li>To respond to your inquiries and support requests</li>
                  <li>
                    To send you updates, newsletters, and marketing
                    communications (with your consent)
                  </li>
                  <li>To improve our website and services</li>
                  <li>
                    To analyze usage patterns and optimize user experience
                  </li>
                  <li>
                    To comply with legal obligations and protect our rights
                  </li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information in the following
                  circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Trusted third-party
                    service providers who assist us in operating our website and
                    conducting our business
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or
                    to protect our rights and safety
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or asset sale
                  </li>
                  <li>
                    <strong>Consent:</strong> With your explicit consent for
                    specific purposes
                  </li>
                </ul>
              </section>

              {/* Data Security */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  These measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </section>

              {/* Data Retention */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes for which it was collected,
                  comply with legal obligations, resolve disputes, and enforce
                  our agreements. When we no longer need your information, we
                  will securely delete or anonymize it.
                </p>
              </section>

              {/* Your Rights */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Your Rights and Choices
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Access:</strong> Request access to your personal
                    information
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information
                  </li>
                  <li>
                    <strong>Portability:</strong> Request a copy of your
                    information in a structured format
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing
                    communications
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to certain processing
                    activities
                  </li>
                </ul>
              </section>

              {/* Cookies */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience. You can control cookie settings
                  through your browser preferences. Our use of cookies includes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand website usage</li>
                  <li>Preference cookies to remember your settings</li>
                </ul>
              </section>

              {/* Third-Party Links */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Third-Party Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices of these external
                  sites. We encourage you to read their privacy policies before
                  providing any personal information.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Children&apos;s Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If you believe we have collected
                  information from a child under 13, please contact us
                  immediately.
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the &quot;Last updated&quot; date. We
                  encourage you to review this policy periodically.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our
                  privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">
                    Trust Solutions
                  </p>
                  <p className="text-gray-600">
                    Email:{" "}
                    <a
                      href="mailto:trustsolutions2025@gmail.com"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      trustsolutions2025@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Phone:{" "}
                    <a
                      href="tel:0722490045"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      0722490045
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Website:{" "}
                    <a
                      href="https://trust-solutions-blog.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://trust-solutions-blog.vercel.app/
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
