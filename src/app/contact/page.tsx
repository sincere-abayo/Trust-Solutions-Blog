"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Layout from "@/components/layout/Layout";

function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [selectedService, setSelectedService] = useState("general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "general",
  });

  // Auto-select service based on URL parameter
  useEffect(() => {
    if (
      serviceParam &&
      ["general", "business", "real-estate", "events"].includes(serviceParam)
    ) {
      setSelectedService(serviceParam);
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [serviceParam]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({
          show: true,
          type: "success",
          message:
            "Thank you for your message! We will get back to you soon. Please check your email for confirmation.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          service: "general",
        });
        setSelectedService("general");
        // Auto-hide notification after 5 seconds
        setTimeout(
          () => setNotification((prev) => ({ ...prev, show: false })),
          5000
        );
      } else {
        const errorData = await response.json();
        setNotification({
          show: true,
          type: "error",
          message: `Error: ${errorData.error || "Failed to send message"}`,
        });
        setTimeout(
          () => setNotification((prev) => ({ ...prev, show: false })),
          5000
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setNotification({
        show: true,
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
      setTimeout(
        () => setNotification((prev) => ({ ...prev, show: false })),
        5000
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      id: "general",
      name: "General Inquiry",
      description: "Have a question? We would love to hear from you.",
    },
    {
      id: "business",
      name: "Business Consulting",
      description:
        "Strategic planning and advisory services for your business.",
    },
    {
      id: "real-estate",
      name: "Real Estate",
      description: "Buying, selling, or investing in real estate.",
    },
    {
      id: "events",
      name: "Event Planning",
      description: "Creating memorable and successful events.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Whatever your challenge, we provide the solution. Get in touch to
            discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h2>

            {/* Service Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                What can we help you with?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service.id);
                      setFormData((prev) => ({ ...prev, service: service.id }));
                    }}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                      selectedService === service.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium text-gray-900 mb-1">
                      {service.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {service.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0784490045"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project or how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-700 text-white hover:bg-blue-400"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>

            <div className="space-y-8">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Trust Solutions Company
                </h3>
                <p className="text-gray-600 mb-4">
                  Delivering effective, customized solutions across our three
                  areas of expertise: Strategic Business Consulting,
                  comprehensive Real Estate Brokerage, and creative Event
                  Planning.
                </p>
                <p className="text-gray-600">
                  <strong>Mission:</strong> Whatever your challenge, we provide
                  the solution.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mt-1 mr-3"
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
                  <div>
                    <div className="font-medium text-gray-900">Address</div>
                    <div className="text-gray-600">
                      KG 16 Ave, Kigali City, Rwanda
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3"
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
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-gray-600">0722490045</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">
                      Trustsolutions2025@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">
                      Business Hours
                    </div>
                    <div className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Service Areas
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Strategic Business Consulting
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Real Estate Brokerage</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">
                      Event Planning Management
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out max-w-md ${
            notification.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {notification.type === "success" ? (
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <span className="text-sm font-medium">
                {notification.message}
              </span>
            </div>
            <button
              onClick={() =>
                setNotification((prev) => ({ ...prev, show: false }))
              }
              className="ml-4 text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
