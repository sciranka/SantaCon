import getConfig from "next/config"

const { basePath } = getConfig()

export const publicImage = (path: string) => {
  return `${basePath || ""}${path}`
}
