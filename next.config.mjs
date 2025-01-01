// import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // extension: /\.mdx?$/,
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    // MEMO: https://nextjs.org/docs/messages/export-image-api
    unoptimized: true
  }
}

// const withMDX = createMDX({
//   // md plug-in
// })

export default nextConfig
