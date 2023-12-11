import { Box, Paper, Stack, Typography } from '@mui/material'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded'

const UserRank = ({ rank }) => {
  const { pos, gapFromNext, gapFromPrev } = rank

  const fromNext = (
    <Stack direction='row' sx={{ alignItems: 'center' }}>
      <KeyboardDoubleArrowUpRoundedIcon color='success' fontSize='large' />
      <Typography variant='h6'>{gapFromNext}</Typography>
    </Stack>
  )

  const fromPrev = (
    <Stack direction='row' sx={{alignItems: 'center'}}>
      <KeyboardDoubleArrowDownRoundedIcon color='error' fontSize='large' />
      <Typography variant='h6'>{gapFromPrev}</Typography>
    </Stack>
  )

  return (
    <Paper elevation={2} className='flex flex-col w-full p-5'>
      <h3 className='text-xl'>Your Rank</h3>
      <div className='flex items-center gap-5'>
        <Typography variant='h2' fontWeight='bold'>
          {pos}
        </Typography>
        <div className='mr-auto flex flex-col'>
          {gapFromNext > 0 && fromNext}
          {gapFromPrev > 0 && fromPrev}
        </div>
      </div>
    </Paper>
  )
}

export default UserRank
