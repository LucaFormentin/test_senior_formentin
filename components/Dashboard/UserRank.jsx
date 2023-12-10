import { Box, Paper } from '@mui/material'

const UserRank = () => {
  return (
    <Paper elevation={2} className='flex w-full p-5'>
      <Box>
        <h3 className='text-xl'>Your Rank</h3>
      </Box>
    </Paper>
  )
}

export default UserRank
