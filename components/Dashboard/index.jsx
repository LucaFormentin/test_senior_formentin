'use client'

import { Grid, Typography } from '@mui/material'
import PostsRecap from './PostsRecap'
import UserRank from './UserRank'
import Ranking from '../Home/Ranking'
import { useRankingContext } from '@/app/context/RankingContextProvider'
import { useEffect, useState } from 'react'
import { getUserRelativePosts } from '@/app/dashboard/actions'
import RecentPosts from './RecentPosts'

const calculateRankGapByUser = (ranking, userId) => {
  const index = ranking.findIndex(user => user.id === userId)

  if (index === -1) return null

  const prevUser = index === ranking.length - 1 ? null : ranking[index + 1]
  const nextUser = index === 0 ? null : ranking[index - 1]

  const gapFromPrev = prevUser
    ? ranking[index].postCounter - ranking[index + 1].postCounter
    : 0
  const gapFromNext = nextUser
    ? ranking[index - 1].postCounter - ranking[index].postCounter
    : 0

  return {
    pos: index + 1,
    gapFromPrev,
    gapFromNext,
  }
}

const Dashboard = props => {
  const { userInfo } = props
  const { ranking } = useRankingContext()
  const [userPosts, setUserPosts] = useState([])
  const [userRank, setUserRank] = useState({
    pos: -1,
    gapFromPrev: -1,
    gapFromNext: -1,
  })

  useEffect(() => {
    const initUserPosts = async () => {
      const posts = await getUserRelativePosts(userInfo.id)
      setUserPosts(posts)
    }

    initUserPosts()

    const rankStatus = calculateRankGapByUser(ranking, userInfo.id)
    setUserRank(rankStatus)
  }, [ranking])

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      className='px-10 py-2'>
      <Grid item container xs={8} className='flex flex-col gap-10'>
        <Typography variant='h4' sx={{ textAlign: 'center', mx: 'auto' }}>
          Welcome to your dashboard, {userInfo.name}!
        </Typography>

        <div className='flex gap-10 items-center justify-center'>
          <div className='flex flex-col gap-10 items-center'>
            <PostsRecap userId={userInfo.id} postsLen={userPosts.length} />
            <UserRank rank={userRank} />
          </div>
          <div className='w-2/3 h-max'>
            <RecentPosts posts={userPosts} />
          </div>
        </div>
      </Grid>

      <Grid item xs={4}>
        <Ranking ranking={ranking} />
      </Grid>
    </Grid>
  )
}

export default Dashboard
