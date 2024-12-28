import RootLayout from '../(root)/layout'

export default function BlogsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <RootLayout>{children}</RootLayout>
}
