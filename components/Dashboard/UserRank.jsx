import { Box, Paper, Typography } from '@mui/material'

const UserRank = ({ rank }) => {
  return (
    <Paper elevation={2} className='flex w-full p-5'>
      <Box>
        <h3 className='text-xl'>Your Rank</h3>
        <Typography variant='h2' fontWeight='bold'>
          {rank}
        </Typography>
      </Box>
    </Paper>
  )
}

export default UserRank
