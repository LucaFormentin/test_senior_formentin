'use client'

import { Grid } from '@mui/material'
import LoginForm from './LoginForm'
import MainWrapper from '../ui/MainWrapper'
import Ranking from './Ranking'
import { useRankingContext } from '@/app/context/RankingContextProvider'
import { useEffect } from 'react'
import { createRanking } from '@/app/actions'

const Home = () => {
  const {ranking, updateRanking} = useRankingContext()

  useEffect(()=>{
    const refreshRank = async () => {
      const newRanking = await createRanking()
      updateRanking(newRanking)
    }

    refreshRank()
  },[])

  const gridItemStyle = 'flex flex-col border items-center justify-center'

  return (
    <MainWrapper>
      <Grid container spacing={2}>
        <Grid item xs={6} className={gridItemStyle}>
          <Ranking ranking={ranking} />
        </Grid>
        <Grid item xs={6} className={gridItemStyle}>
          <LoginForm />
        </Grid>
      </Grid>
    </MainWrapper>
  )
}

export default Home
