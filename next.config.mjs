const root = process.cwd()

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: root,
  turbopack: {
    root,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
