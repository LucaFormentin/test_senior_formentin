'use client'

import { Grid } from '@mui/material'
import LoginForm from './LoginForm'
import MainWrapper from '../ui/MainWrapper'

const Home = () => {
  const gridItemStyle = 'flex justify-center'

  return (
    <MainWrapper>
      <Grid container spacing={2}>
        <Grid item xs={6} className={gridItemStyle}>
          <h1>Frontend Senior Test - Formentin Luca</h1>
        </Grid>
        <Grid item xs={6} className={gridItemStyle}>
          <LoginForm />
        </Grid>
      </Grid>
    </MainWrapper>
  )
}

export default Home
