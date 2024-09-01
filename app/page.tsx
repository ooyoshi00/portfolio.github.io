'use client'

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
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

const Home = () => {
  return (
    <>
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
      </Box>
    </>
  )
}

export default Home
