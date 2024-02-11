'use client'

import {
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import ResponsiveAppBar from './_component/appHeader'
import CheckIcon from '@mui/icons-material/Check'

const profile = {
  name: 'Yoshi Oka'
}

const career = [
  '1995 年生まれ 関東在住',
  'フロントエンドエンジニアとして新卒で働き始めて 3 年目',
  '主に TypeScript+React で開発',
  'バックエンドも AWS,たまに Firebase も触ってます',
  '将来的にはフルスタックに開発したいと思い、色々な技術に手をつけてます',
  '運動するのが好きで、中学から野球を続けてます'
]

type Links = {
  [key: string]: {
    name: string
    link: string
  }
}
const links: Links = {
  'X(旧Twitter)': {
    name: '@yosshioka0022',
    link: 'https://twitter.com/yosshioka0022'
  },
  GitHub: {
    name: '@ooyoshi00',
    link: 'https://github.com/ooyoshi00'
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

const Home = () => {
  return (
    <Box maxWidth={'80ch'} mr="auto" ml="auto">
      <ResponsiveAppBar />
      <Box display={'flex'} flexDirection="column" justifyContent={'center'}>
        <Typography variant="h2" margin={2}>
          About
        </Typography>
        <Typography variant="h3" margin={2}>
          {profile.name}
        </Typography>
        <Box display={'flex'} flexDirection={'column'} margin={2}>
          <Typography variant="h4">経歴</Typography>
          <List>
            {career.map((item) => (
              <ListItem>
                <ListItemIcon>
                  <CheckIcon fontSize="small" sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box display={'flex'} flexDirection={'column'} margin={2}>
          <Typography variant="h4">Links</Typography>
          <List>
            {Object.keys(links).map((key) => (
              <ListItem key={key}>
                <ListItemIcon>
                  <CheckIcon fontSize="small" sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText>
                  {key}{' '}
                  <Link
                    href={links[key].link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {links[key].name}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
