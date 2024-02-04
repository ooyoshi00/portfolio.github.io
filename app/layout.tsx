// import '@/app/ui/global.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
