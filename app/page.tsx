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
import Skills from './skills'

const profile = {
  name: 'Yoshioka'
}

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
        <Skills />
      </Box>
    </>
  )
}

export default Home
