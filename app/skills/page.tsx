'use client'

import { Box, Grid, Typography, styled } from '@mui/material'
import ResponsiveAppBar from '../_component/appHeader'

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart
} from 'recharts'

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
  return (
    <Box maxWidth={'80ch'} mr="auto" ml="auto">
      <ResponsiveAppBar />
      <Box display={'flex'} flexDirection="column" justifyContent={'center'}>
        <Typography variant="h2" margin={2}>
          Skills
        </Typography>
        <Grid container spacing={0.5} fontSize={'x-small'}>
          <GridRechartItem item xs={6}>
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
          </GridRechartItem>
          <GridRechartItem item xs={6}>
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
          </GridRechartItem>
        </Grid>
        <Box display={'flex'} justifyContent={'center'} fontSize={'x-small'}>
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
      </Box>
    </Box>
  )
}

export default Home
