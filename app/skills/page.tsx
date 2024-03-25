'use client'

import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  styled
} from '@mui/material'
import ResponsiveAppBar from '../_component/appHeader'

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart
} from 'recharts'
import { useEffect, useState } from 'react'

const profile = {
  name: 'Yoshi Oka'
}

type Skills = {
  name: string
  rank: number
}
const frontendSkills: Skills[] = [
  {
    name: 'HTML/CSS',
    rank: 3
  },
  {
    name: 'JavaScript',
    rank: 3
  },
  {
    name: 'TypeScript',
    rank: 3
  },
  {
    name: 'React',
    rank: 4
  },
  {
    name: 'Vue.js',
    rank: 1
  },
  {
    name: 'jest',
    rank: 2
  }
]

const backendSkills: Skills[] = [
  {
    name: 'JavaScript',
    rank: 3
  },
  {
    name: 'TypeScript',
    rank: 3
  },
  {
    name: 'Python',
    rank: 2
  },
  {
    name: 'MySQL',
    rank: 1
  },
  {
    name: 'GraphQL',
    rank: 1
  },
  {
    name: 'NoSQL',
    rank: 2
  },
  {
    name: 'Node.js',
    rank: 2
  },
  {
    name: 'Auth0',
    rank: 2
  }
]

const etcSkills: Skills[] = [
  {
    name: 'Git/Github/Gitlab',
    rank: 3
  },
  {
    name: 'AWS',
    rank: 2
  },
  {
    name: 'Firebase',
    rank: 1
  },
  {
    name: 'GCP',
    rank: 1
  },
  {
    name: 'Docker',
    rank: 1
  }
]

const GridRechartItem = styled(Grid)({
  display: 'flex',
  justifyContent: 'center'
})

const Home = () => {
  const [frontend, setFrontend] = useState(null)
  console.log(process.env.NEXT_PUBLIC_API_URL)
  useEffect(() => {
    ;(async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/db`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      console.log(response)
      const data = await response.json()
      setFrontend(data)
    })()
  }, [])

  console.log(frontend)

  return (
    <Box maxWidth={'80ch'} mr="auto" ml="auto">
      <ResponsiveAppBar />
      <Box display={'flex'} flexDirection="column" justifyContent={'center'}>
        <Typography variant="h2" margin={2}>
          Skills
        </Typography>
        <Grid container spacing={0.5} fontSize={'x-small'}>
          <GridRechartItem item xs={6}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant="h6">Frontend</Typography>
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                height={300}
                width={400}
                data={frontendSkills}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis domain={[0, 5]} />
                <Radar
                  name="Mike"
                  dataKey="rank"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </Box>
          </GridRechartItem>
          <GridRechartItem item xs={6}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant="h6">Backend</Typography>
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                height={300}
                width={400}
                data={backendSkills}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis domain={[0, 5]} />
                <Radar
                  name="Mike"
                  dataKey="rank"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </Box>
          </GridRechartItem>
        </Grid>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          fontSize={'x-small'}
        >
          <Typography variant="h6">Dev/Ops</Typography>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            height={300}
            width={400}
            data={etcSkills}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis domain={[0, 5]} />
            <Radar
              name="Mike"
              dataKey="rank"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </Box>
        <Paper elevation={3}>
          <List>
            <ListItem>
              <ListItemText secondary={'5: 完全に理解している'} />
            </ListItem>
            <ListItem>
              <ListItemText secondary={'4: 最適になるように設計・実装できる'} />
            </ListItem>
            <ListItem>
              <ListItemText secondary={'3: ある程度1人で設計・実装できる'} />
            </ListItem>
            <ListItem>
              <ListItemText secondary={'2: 調べながらなら設計・実装できる'} />
            </ListItem>
            <ListItem>
              <ListItemText secondary={'1: 触ったことがある'} />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Box>
  )
}

export default Home
