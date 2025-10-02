import { Countdown } from "@components/Countdown"
import { FeatureCard } from "@components/FeatureCard"
import { Footer } from "@components/Footer"
import { publicImage } from "@utils/image"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

const EVENT_START_DATE_ISO = "2025-12-05T17:00:00.000Z"

export const metadata: Metadata = {
  title: "SantaCon | Bratislava",
  description:
    "SantaCon Bratislava, the unforgettable holiday celebration. Get ready for the ultimate fun in the capital of Slovakia.",
  keywords: [
    "SantaCon",
    "Bratislava",
    "Christmas",
    "Holiday",
    "Event",
    "Slovakia",
  ],
  openGraph: {
    title: "SantaCon Bratislava",
    description: "Join the holiday celebration in Bratislava",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-start pt-16 sm:pt-20 lg:pt-8 px-4">
        <section className="flex flex-col items-center text-center w-full max-w-none">
          {/* Hero Image */}
          <div className="relative w-full max-w-7xl lg:max-w-[70vw] xl:max-w-[35vw] aspect-[1000/719]">
            <Image
              src={publicImage("santa_hat.png")}
              alt="Festive Santa hat for SantaCon Bratislava celebration"
              fill={true}
              priority={true}
              className="object-contain"
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 85vw, 75vw"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight">
            SantaCon
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin leading-tight">
            Bratislava
          </h1>
        </section>

        <section>
          <Countdown targetDate={new Date(EVENT_START_DATE_ISO)} />
        </section>

        {/* New Section */}
        <section className="w-full max-w-4xl mx-auto px-4 py-32  text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Get Ready for the Ultimate Fun Experience
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Join tens of Santas as we spread holiday cheer throughout the
            beautiful streets of Bratislava. This unforgettable celebration
            brings together people from all walks of life for a day of festive
            fun, charity, and community spirit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <FeatureCard
              icon="🎅"
              title="Join the Parade"
              description="March through the historic center with fellow Santas"
            />
            <FeatureCard
              icon="🎁"
              title="Spread Joy"
              description="Help make the holidays special for everyone"
            />
            <FeatureCard
              icon="🎉"
              title="Have Fun"
              description="Create memories that will last a lifetime"
            />
          </div>
        </section>

        {/* Previous Years Section */}
        <section className="w-full max-w-6xl mx-auto px-4 pb-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Relive the Magic
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-12">
            Take a look back at the amazing memories we've created together in
            previous SantaCon celebrations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">2024</h3>
              <p className="text-white/80 text-sm">
                Our biggest event yet with incredible memories
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">2023</h3>
              <p className="text-white/80 text-sm">
                The year that started it all in Bratislava
              </p>
            </div>
          </div>

          {/* TODO: For custom domain, change href to "/previous-years/" */}
          <Link
            href="./previous-years/"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            View All Previous Years
            <span className="text-lg">📸</span>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
