import { Footer } from "@components/Footer"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Previous Years | SantaCon Bratislava",
  description:
    "Explore the amazing memories from previous SantaCon Bratislava celebrations. Photos, highlights, and unforgettable moments.",
}

export default function PreviousYearsPage() {
  const years = [
    {
      year: "2024",
      title: "Growing Community",
      description:
        "The second year brought even more joy and festive spirit. We expanded our route and added new traditions that continue today.",
      highlights: ["30+ participants", "Extended route", "New traditions"],
      photos: 12,
    },
    {
      year: "2023",
      title: "The Beginning",
      description:
        "Where it all started! Our first SantaCon Bratislava was a magical introduction to what would become an annual tradition.",
      highlights: ["10+ participants", "Historic debut", "Community spirit"],
      photos: 6,
    },
  ]

  return (
    <div className="min-h-screen font-sans flex flex-col">
      <main className="flex-1 px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* TODO: For custom domain, no change needed (already "/" is correct) */}
          <Link
            href="../"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Previous Years
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Relive the magical moments from our previous SantaCon Bratislava
            celebrations
          </p>
        </div>

        {/* Years Grid */}
        <div className="max-w-6xl mx-auto space-y-16">
          {years.map((event, index) => (
            <div
              key={event.year}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                  {event.year}
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  {event.title}
                </h2>

                <p className="text-lg text-white/90 leading-relaxed">
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  {event.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                    >
                      <span className="text-white/80 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-white/70">
                  <span className="flex items-center gap-2">
                    📸 {event.photos} photos
                  </span>
                  <button
                    type="button"
                    className="text-red-400 hover:text-red-300 transition-colors font-medium"
                  >
                    View Gallery →
                  </button>
                </div>
              </div>

              {/* Placeholder Image */}
              <div
                className={`bg-white/10 backdrop-blur-sm rounded-xl aspect-[4/3] flex items-center justify-center ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="text-center text-white/60">
                  <div className="text-6xl mb-4">🎅</div>
                  <p className="text-lg font-medium">{event.year} Highlights</p>
                  <p className="text-sm">Photos coming soon</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center mt-24 p-12 bg-white/5 backdrop-blur-sm rounded-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Create New Memories?
          </h3>
          <p className="text-lg text-white/90">
            Join us for SantaCon Bratislava 2025 and become part of our growing
            community!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
