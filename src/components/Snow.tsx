"use client"

import type { Container } from "@tsparticles/engine"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useEffect } from "react"

export const Snow = (): React.JSX.Element => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim engine with basic particle functionality
      await loadSlim(engine)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Snow particles loaded", container)
  }

  return (
    <Particles
      id="snow"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 100, // More snowflakes
          },
          color: {
            value: "#ffffff", // White snow
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.3, max: 0.7 }, // Varying opacity
          },
          size: {
            value: { min: 1, max: 4 }, // Different sizes
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
        fpsLimit: 60,
      }}
      className="absolute inset-0 pointer-events-none -z-10"
    />
  )
}
