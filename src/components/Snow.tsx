"use client"

import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useEffect, useMemo } from "react"

const PARTICLE_COUNT = {
  mobile: 30,
  tablet: 60,
  desktop: 100,
} as const

const getDeviceSize = (): keyof typeof PARTICLE_COUNT => {
  if (typeof window === "undefined") return "desktop"

  const width = window.innerWidth

  if (width < 768) return "mobile"
  if (width < 1024) return "tablet"
  return "desktop"
}

const getParticleCount = (): number => {
  const deviceSize = getDeviceSize()
  return PARTICLE_COUNT[deviceSize]
}

export const Snow = (): React.JSX.Element => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    })
  }, [])

  const particleCount = useMemo(() => getParticleCount(), [])

  return (
    <Particles
      id="snow"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: particleCount,
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.2, max: 0.7 },
          },
          size: {
            value: { min: 1, max: 4 },
          },
          move: {
            enable: true,
            speed: { min: 1, max: 3 }, // Gentle falling speed
            direction: "bottom",
            straight: false,
            outModes: {
              default: "out",
            },
          },
          wobble: {
            enable: true,
            distance: 10, // Side-to-side drift
            speed: { min: -15, max: 15 },
          },
        },
        detectRetina: true,
        fpsLimit: 60, // Lower FPS for battery savings
        pauseOnBlur: true, // Stop when tab not active
        pauseOnOutsideViewport: true, // Stop when not visible
      }}
      className="absolute inset-0 pointer-events-none -z-10"
    />
  )
}
