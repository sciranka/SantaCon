import { publicImage } from "@utils/image"
import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SantaCon Bratislava",
    short_name: "SantaCon",
    description:
      "SantaCon Bratislava, the unforgettable holiday celebration. Get ready for the ultimate fun in the capital of Slovakia.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0c0c24",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    categories: ["entertainment", "social", "lifestyle"],
    icons: [
      {
        src: publicImage("/icon-192.png"),
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: publicImage("/icon-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: publicImage("/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
