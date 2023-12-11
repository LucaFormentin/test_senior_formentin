import { Box, Paper, Typography } from '@mui/material'

const UserRank = ({ rank }) => {
  const {pos, gapFromNext, gapFromPrev} = rank

  //TODO: status message based on pos

  return (
    <Paper elevation={2} className='flex w-full p-5'>
      <Box>
        <h3 className='text-xl'>Your Rank</h3>
        <Typography variant='h2' fontWeight='bold'>
          {pos}
        </Typography>
        <span>
          {gapFromNext > 0 && `from next: ${gapFromNext}`}
          {gapFromPrev > 0 && `from prev: ${gapFromPrev}`}
        </span>
      </Box>
    </Paper>
  )
}

export default UserRank
