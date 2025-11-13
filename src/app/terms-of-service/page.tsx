import Layout from "../../components/layout/Layout";

export const metadata = {
  title: "Terms of Service - Trust Solutions",
  description:
    "Terms of Service for Trust Solutions - Legal terms and conditions for using our services.",
};

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Legal terms and conditions for using Trust Solutions services and
              website.
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
                  1. Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to Trust Solutions (&quot;Company,&quot;
                  &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These
                  Terms of Service (&quot;Terms&quot;) govern your use of our
                  website, services, and any related applications (collectively,
                  the &quot;Service&quot;) operated by Trust Solutions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing or using our Service, you agree to be bound by
                  these Terms. If you disagree with any part of these terms,
                  then you may not access the Service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These Terms apply to all visitors, users, and others who
                  access or use the Service.
                </p>
              </section>

              {/* Services Description */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Description of Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Trust Solutions provides professional consulting services
                  including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>Strategic Business Consulting:</strong> Business
                    strategy, operations optimization, and growth planning
                  </li>
                  <li>
                    <strong>Real Estate Brokerage:</strong> Property buying,
                    selling, and investment advisory services
                  </li>
                  <li>
                    <strong>Event Planning Management:</strong> Corporate
                    events, conferences, and special occasion planning
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any
                  aspect of our services at any time with or without notice.
                </p>
              </section>

              {/* User Accounts */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. User Accounts and Registration
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you create an account or use our services, you must
                  provide information that is accurate, complete, and current at
                  all times. You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Safeguarding your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Immediately notifying us of any unauthorized use</li>
                  <li>
                    Maintaining the confidentiality of your account information
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to refuse service, terminate accounts, or
                  remove content at our sole discretion.
                </p>
              </section>

              {/* Acceptable Use */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Acceptable Use Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>
                    Transmit any harmful, threatening, or offensive content
                  </li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>
                    Use automated systems to access the Service without
                    permission
                  </li>
                  <li>Engage in any fraudulent or deceptive practices</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Violation of this policy may result in immediate termination
                  of your access to the Service.
                </p>
              </section>

              {/* Service Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Service Terms and Conditions
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Consultation Services
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    Initial consultations may be provided free of charge at our
                    discretion
                  </li>
                  <li>
                    Detailed service agreements will be provided for ongoing
                    engagements
                  </li>
                  <li>
                    Payment terms and project scope will be clearly defined in
                    separate agreements
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Real Estate Services
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    All real estate transactions are subject to applicable laws
                    and regulations
                  </li>
                  <li>
                    Commission structures and terms will be outlined in listing
                    or buyer agreements
                  </li>
                  <li>
                    We maintain appropriate professional licenses and insurance
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Event Planning Services
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    Event planning services require signed service agreements
                  </li>
                  <li>
                    Deposits may be required to secure services and vendors
                  </li>
                  <li>
                    Cancellation policies will be clearly stated in service
                    agreements
                  </li>
                </ul>
              </section>

              {/* Payment Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Payment Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Payment terms vary by service type and will be specified in
                  individual service agreements:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    Consulting fees are typically billed hourly or on a project
                    basis
                  </li>
                  <li>Real estate commissions are paid at closing</li>
                  <li>
                    Event planning may require deposits and milestone payments
                  </li>
                  <li>
                    All fees are exclusive of applicable taxes unless otherwise
                    stated
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Late payments may incur additional charges as specified in
                  service agreements.
                </p>
              </section>

              {/* Intellectual Property */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Intellectual Property Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Service and its original content, features, and
                  functionality are owned by Trust Solutions and are protected
                  by international copyright, trademark, and other intellectual
                  property laws.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    Our trademarks and trade dress may not be used without
                    written permission
                  </li>
                  <li>
                    You may not modify, distribute, or create derivative works
                    of our content
                  </li>
                  <li>
                    Any feedback or suggestions you provide may be used by us
                    without compensation
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You retain ownership of any content you provide to us, but
                  grant us necessary licenses to provide our services.
                </p>
              </section>

              {/* Privacy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy
                  Policy, which also governs your use of the Service, to
                  understand our practices regarding the collection and use of
                  your personal information. By using our Service, you agree to
                  the collection and use of information in accordance with our
                  Privacy Policy.
                </p>
              </section>

              {/* Disclaimers */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Disclaimers and Warranties
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we strive to provide excellent services, we make no
                  warranties or representations about the accuracy or
                  completeness of the Service content. The Service is provided
                  on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>We disclaim all warranties, express or implied</li>
                  <li>
                    We do not warrant that the Service will be uninterrupted or
                    error-free
                  </li>
                  <li>
                    We are not responsible for third-party content or services
                  </li>
                  <li>
                    Results from our services may vary and are not guaranteed
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Some jurisdictions do not allow the exclusion of certain
                  warranties, so some of the above exclusions may not apply to
                  you.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In no event shall Trust Solutions, its directors, employees,
                  partners, agents, suppliers, or affiliates be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages, including loss of profits, data, use, goodwill, or
                  other intangible losses.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our total liability to you for all claims arising out of or
                  relating to the use of or inability to use the Service shall
                  not exceed the amount paid by you, if any, for accessing the
                  Service during the twelve (12) months prior to the claim.
                </p>
              </section>

              {/* Indemnification */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Indemnification
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless Trust
                  Solutions and its licensees, licensors, employees,
                  contractors, agents, officers, and directors from and against
                  any and all claims, damages, obligations, losses, liabilities,
                  costs, or debt, and expenses (including attorney&apos;s fees)
                  resulting from your use of the Service or your violation of
                  these Terms.
                </p>
              </section>

              {/* Termination */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. Termination
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may terminate or suspend your account and access to the
                  Service immediately, without prior notice or liability, for
                  any reason, including breach of these Terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Upon termination, your right to use the Service will cease
                  immediately. The provisions of these Terms that by their
                  nature should survive termination shall survive, including
                  ownership provisions, warranty disclaimers, and limitations of
                  liability.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  13. Governing Law and Jurisdiction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of
                  the jurisdiction in which Trust Solutions operates, without
                  regard to conflict of law provisions. Any disputes arising
                  from these Terms or the Service shall be resolved in the
                  courts of competent jurisdiction in that location.
                </p>
              </section>

              {/* Severability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  14. Severability
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is held to be invalid or
                  unenforceable by a court, the remaining provisions will remain
                  in effect. The invalid or unenforceable provision will be
                  replaced with a valid one that most closely matches the intent
                  of the original provision.
                </p>
              </section>

              {/* Changes to Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  15. Changes to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will provide at least 30
                  days&apos; notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By continuing to access or use our Service after revisions
                  become effective, you agree to be bound by the revised terms.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  16. Contact Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
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
                <p className="text-gray-600 text-sm mt-4 italic">
                  These Terms of Service constitute the entire agreement between
                  you and Trust Solutions regarding the use of the Service.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
