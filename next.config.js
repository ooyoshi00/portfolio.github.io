const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

module.exports = withNextra({
  reactStrictMode: true,
  output: 'export',
  images: {
    // MEMO: https://nextjs.org/docs/messages/export-image-api
    unoptimized: true
  }
})
