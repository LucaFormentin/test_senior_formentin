'use client'

import { Grid } from '@mui/material'
import LoginForm from './LoginForm'
import MainWrapper from '../ui/MainWrapper'
import Ranking from './Ranking'
import { useRankingContext } from '@/app/context/RankingContextProvider'
import { useEffect } from 'react'
import { createRanking } from '@/app/actions'

const Home = () => {
  const { ranking, updateRanking } = useRankingContext()

  useEffect(() => {
    const refreshRank = async () => {
      const newRanking = await createRanking()
      updateRanking(newRanking)
    }

    refreshRank()
  }, [])

  return (
    <MainWrapper>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Ranking ranking={ranking} />
        </Grid>
        <Grid item xs={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </MainWrapper>
  )
}

export default Home
