import { useRankingContext } from '@/app/context/RankingContextProvider'
import { Box, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const UserRank = ({ userId }) => {
  const { ranking } = useRankingContext()
  const [rank, setRank] = useState(0)

  useEffect(() => {
    console.log(ranking)

    const currentRankPos = ranking.findIndex(user => user.id === userId)
    setRank(currentRankPos + 1)
  }, [ranking])

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
