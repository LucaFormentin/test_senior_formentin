'use client'

import { Grid, Typography } from '@mui/material'
import LoginForm from './LoginForm'
import { useRankingContext } from '@/app/context/RankingContextProvider'
import { useEffect } from 'react'
import { createRanking } from '@/app/actions'
import Ranking from './Ranking'

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
    <>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        className='min-h-screen'>
        <Grid item xs={6}>
          <Ranking ranking={ranking} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Typography
            variant='h2'
            fontWeight='bold'
            sx={{ textAlign: 'center', mx: 'auto' }}>
            Blogging Competition
          </Typography>
          <LoginForm />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
