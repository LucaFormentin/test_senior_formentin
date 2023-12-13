import { Box, Paper, Stack, Typography } from '@mui/material'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded'
import { useEffect, useState } from 'react'
import RankingCup from '../Home/RankingCup'
import { ClimbAlert } from '@/style/swal'

const handleClimbAlerts = pos => {
  if (pos === 3) {
    ClimbAlert.fire({
      title: `Congrats! You have reached the podium!`,
      imageUrl: '/images/podium.png',
    })
  } else if (pos === 2) {
    ClimbAlert.fire({
      title: `Congrats! Keep posting to become first!`,
      imageUrl: '/images/silver-cup.png',
    })
  } else if (pos === 1) {
    ClimbAlert.fire({
      title: `Congrats! You are first in the ranking!`,
      imageUrl: '/images/gold-cup.png',
    })
  }
}

const UserRank = ({ totUsers, rank }) => {
  const { pos, gapFromNext, gapFromPrev } = rank

  useEffect(() => {
    handleClimbAlerts(pos)
  }, [pos])

  const fromNext = (
    <Stack direction='row' sx={{ alignItems: 'center' }}>
      {pos !== 1 && (
        <>
          <KeyboardDoubleArrowDownRoundedIcon color='error' fontSize='large' />
          <Typography variant='h6'>
            {gapFromNext === 0 ? 'Tie' : gapFromNext}
          </Typography>
        </>
      )}
    </Stack>
  )

  const fromPrev = (
    <Stack direction='row' sx={{ alignItems: 'center' }}>
      {pos !== totUsers && (
      <>
        <KeyboardDoubleArrowUpRoundedIcon color='success' fontSize='large' />
        <Typography variant='h6'>
          {gapFromPrev === 0 ? 'Tie' : gapFromPrev}
        </Typography>
      </>
      )}
    </Stack>
  )

  const posText =
    pos <= 3 ? (
      <RankingCup index={pos - 1} dim={90} />
    ) : (
      <Typography variant='h2' fontWeight='bold'>
        {pos}
      </Typography>
    )

  return (
    <Paper elevation={2} className='flex flex-col w-full p-5 gap-2'>
      <h3 className='text-xl'>Your Rank</h3>
      <div className='flex items-center gap-2'>
        {posText}
        <div className='mr-auto flex flex-col'>
          {fromNext}
          {fromPrev}
        </div>
      </div>
    </Paper>
  )
}

export default UserRank
