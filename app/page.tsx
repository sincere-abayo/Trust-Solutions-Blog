import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-3xl text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trust Solutions Company
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Professional, multi-service expertise in Strategic Business Consulting, Real Estate Brokerage, and Event Planning.
          </p>
          <p className="mb-8">
            <span className="font-semibold">Whatever your challenge, we provide the solution.</span>
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Get a Quote
          </a>
        </div>
        {/* Hero Image (Live from Unsplash) */}
        <div className="absolute inset-0 z-0 opacity-35">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="Business Team"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      {/* Trust-Building Stats & Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-600">10+ Years</h2>
            <p className="mt-2 text-gray-700">Experience in Business Consulting</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-600">100+ Properties</h2>
            <p className="mt-2 text-gray-700">Brokered and Managed</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple-600">300+ Events</h2>
            <p className="mt-2 text-gray-700">Successfully Planned & Delivered</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl italic text-gray-800">
            &quot;Trust Solutions helped us unlock new growth and deliver a memorable event experience. Their expertise truly stands out.&quot;
          </blockquote>
          <p className="mt-2 text-blue-600 font-semibold">— Satisfied Client</p>
        </div>
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Partner Logos (using open source SVGs as placeholders) */}
          <Image src="https://cdn.simpleicons.org/microsoft/2563eb/48" alt="Microsoft" width={48} height={48}/>
          <Image src="https://cdn.simpleicons.org/google/2563eb/48" alt="Google" width={48} height={48}/>
          <Image src="https://cdn.simpleicons.org/linkedin/2563eb/48" alt="LinkedIn" width={48} height={48}/>
        </div>
      </section>

      {/* Service Showcase */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg shadow p-6 flex flex-col items-center">
            <Image src="https://cdn.simpleicons.org/briefcase/2563eb/48" alt="Consulting" width={48} height={48}/>
            <h3 className="mt-4 text-xl font-bold text-blue-600">Business Consulting</h3>
            <p className="mt-2 text-gray-700 text-center">
              Strategic planning guides, market analysis, growth tips, and industry insights to elevate your business.
            </p>
            <a href="/category/business-consulting" className="mt-4 text-blue-600 underline">
              Explore Insights
            </a>
          </div>
          <div className="bg-green-50 rounded-lg shadow p-6 flex flex-col items-center">
            <Image src="https://cdn.simpleicons.org/home/22c55e/48" alt="Real Estate" width={48} height={48}/>
            <h3 className="mt-4 text-xl font-bold text-green-600">Real Estate Brokerage</h3>
            <p className="mt-2 text-gray-700 text-center">
              Market trends, buying/selling guides, investment advice, property showcases, and legal insights.
            </p>
            <a href="/category/real-estate" className="mt-4 text-green-600 underline">
              View Properties
            </a>
          </div>
          <div className="bg-purple-50 rounded-lg shadow p-6 flex flex-col items-center">
            <Image src="https://cdn.simpleicons.org/eventbrite/a21caf/48" alt="Event Planning" width={48} height={48}/>
            <h3 className="mt-4 text-xl font-bold text-purple-600">Event Planning</h3>
            <p className="mt-2 text-gray-700 text-center">
              Event design inspiration, planning checklists, vendor recommendations, success stories, and seasonal trends.
            </p>
            <a href="/category/event-planning" className="mt-4 text-purple-600 underline">
              See Events
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}