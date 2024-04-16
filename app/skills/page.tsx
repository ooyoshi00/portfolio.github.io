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
import { useEffect, useReducer } from 'react'
import { categorizeSkills } from '../../lib/categorizaSkills'

type DataState = {
  isLoading: boolean
  isError: string
  data: any
}
//initialStateを作成
const initialState: DataState = {
  isLoading: true,
  isError: '',
  data: {}
}

const dataFetchReducer = (dataState, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        isLoading: true,
        data: {},
        isError: ''
      }
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        data: action.payload,
        isError: ''
      }
    case 'FETCH_ERROR':
      return {
        isLoading: false,
        data: {},
        isError: '読み込みに失敗しました'
      }
    default:
      return dataState
  }
}
const GridRechartItem = styled(Grid)({
  display: 'flex',
  justifyContent: 'center'
})

const Home = () => {
  const [dataState, dispatch] = useReducer(dataFetchReducer, initialState)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/db`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        const resJson = await res.json()
        const data = categorizeSkills(resJson.data)
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      })
      .catch((e) => {
        console.error(e)
        dispatch({ type: 'FETCH_ERROR', payload: {} })
      })
  }, [])

  return (
    <Box maxWidth={'80ch'} mr="auto" ml="auto">
      <ResponsiveAppBar />
      <Box display={'flex'} flexDirection="column" justifyContent={'center'}>
        <Typography variant="h2" margin={2}>
          Skills
        </Typography>
        {dataState.isLoading ? (
          '...isLoading'
        ) : (
          <>
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
                    data={dataState.data?.frontend ?? []}
                  >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skillname" />
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
                    data={dataState.data?.backend ?? []}
                  >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skillname" />
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
                data={dataState.data?.etc ?? []}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="skillname" />
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
          </>
        )}

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
