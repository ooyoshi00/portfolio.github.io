import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  exportTrailingSlash: true,
  distDir: 'out',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    // MEMO: https://nextjs.org/docs/messages/export-image-api
    unoptimized: true
  }
}

const withMDX = createMDX({
  // md plug-in
})

export default withMDX(nextConfig)
