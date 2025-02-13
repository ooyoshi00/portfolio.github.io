import Header from '../_component/appHeader'
import Breadcrumbs from './Breadcrumbs'
import type { Metadata } from 'next'

// These styles apply to every route in the application
import './globals.css'
import Footer from '../_component/appFooter'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}
const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <body className={`bg-blue-50`}>
        <Header />
        <Breadcrumbs />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
