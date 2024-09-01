'use client'

import {
  Box,
  Checkbox,
  ThemeProvider,
  createTheme,
  styled
} from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { orange } from '@mui/material/colors'
import ResponsiveAppBar from './_component/appHeader'
import ResponsiveAppFooter from './_component/appFooter'

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2'
    }
  }
})

const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>
            <Box maxWidth={'80ch'} mr="auto" ml="auto">
              <ResponsiveAppBar />
              {children}
              <ResponsiveAppFooter />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
