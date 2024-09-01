'use client'

import * as React from 'react'
import {
  Box,
  Card,
  CardActionArea,
  Container,
  Divider,
  Grid,
  Typography,
  styled
} from '@mui/material'
import Link from 'next/link'
import XIcon from '@mui/icons-material/X'
import GitHubIcon from '@mui/icons-material/GitHub'
import { ReactNode } from '@mdx-js/react/lib'
import { blue } from '@mui/material/colors'

const NoLineLink = styled(Link)({
  textDecoration: 'none'
})

type Links = {
  [key: string]: {
    name: string
    link: string
    icon?: ReactNode
  }
}
const links: Links = {
  'X(旧Twitter)': {
    name: '@yosshioka0022',
    link: 'https://twitter.com/yosshioka0022',
    icon: <XIcon />
  },
  GitHub: {
    name: '@ooyoshi00',
    link: 'https://github.com/ooyoshi00',
    icon: <GitHubIcon />
  },
  Zenn: {
    name: '@yoshiooon',
    link: 'https://zenn.dev/yoshiooon'
  },
  Qiita: {
    name: '@oyoshi0022',
    link: 'https://qiita.com/oyoshi0022'
  }
}

const ResponsiveAppFooter = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          padding: '1rem'
        }}
      >
        <Divider />
        <Container maxWidth="lg" sx={{ padding: '1rem' }}>
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <SNSLists />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                Yoshioka {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
export default ResponsiveAppFooter

const SNSLists = () => {
  return (
    <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} p={2} gap={1}>
      {Object.keys(links).map((key) => (
        <Card sx={{ backgroundColor: blue[50], padding: '0.5rem' }}>
          <CardActionArea
            href={links[key].link}
            target="_blank"
            rel="noreferrer noopener"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {links[key].icon ? links[key].icon : key}：&nbsp;
            <Box fontWeight="Bold">{links[key].name}</Box>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  )
}
