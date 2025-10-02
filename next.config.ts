const repo = process.env.GITHUB_REPO || ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: repo ? `/${repo}` : "",
  // TODO: When using custom domain, remove basePath line above
}

export default nextConfig
