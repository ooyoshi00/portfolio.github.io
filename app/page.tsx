'use client'

import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { grey } from '@mui/material/colors'

const profile = {
  name: 'Yoshioka'
}

const career = [
  '1995 年生まれ 関東在住',
  'フロントエンドエンジニアとして新卒で働き始めて 3 年目',
  '主に TypeScript+React で開発',
  'バックエンドも AWS,たまに Firebase も触ってます',
  '将来的にはフルスタックに開発したいと思い、色々な技術に手をつけてます',
  '運動するのが好きで、中学から野球を続けてます'
]

const startYear = 2020
const Home = () => {
  const workYear = new Date().getFullYear() - startYear
  return (
    <>
      <Box display={'flex'} flexDirection="column" justifyContent={'center'}>
        <Typography variant="h2" margin={2}>
          About
        </Typography>
        <Paper elevation={1} sx={{ padding: '2rem' }}>
          <Typography variant="h4">{profile.name}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="myAvatar"
              src={'/images/myIcon.jpeg'}
              sx={{ width: 80, height: 80 }}
            />
            <Box p={2} color={grey[700]}>
              大学で情報工学を専攻し、新卒でフロントエンドエンジニアとして採用。現在はサーバーサイドの設計・開発にも携わっています。実務
              {workYear}
              年目となり、フロントエンドとバックエンドの両面での開発経験を積んでいます。
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default Home
