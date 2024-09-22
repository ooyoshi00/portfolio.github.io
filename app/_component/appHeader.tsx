'use client'

import * as React from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  styled
} from '@mui/material'
import Link from 'next/link'

const NoLineLink = styled(Link)({
  textDecoration: 'none'
})

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Port Folio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <NoLineLink href="/" prefetch={true}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                About
              </Button>
            </NoLineLink>
            <NoLineLink href="/blogs" prefetch={true}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Blogs
              </Button>
            </NoLineLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
