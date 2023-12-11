'use client'

import { Grid } from '@mui/material'
import PostsRecap from './PostsRecap'
import CustomButton from '../ui/CustomButton'
import UserRank from './UserRank'
import Ranking from '../Home/Ranking'
import { useRankingContext } from '@/app/context/RankingContextProvider'
import { useEffect, useState } from 'react'
import { getUserRelativePosts } from '@/app/dashboard/actions'

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
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <div className='flex flex-col border items-center justify-center gap-10 p-2'>
          <h1 className='text-xl font-bold'>
            Welcome to your dashboard, {userInfo.name}!
          </h1>
          <CustomButton
            type='link'
            route={`/dashboard/${userInfo.id}/post_creator`}>
            Create new post
          </CustomButton>
          <PostsRecap posts={userPosts} />
          <UserRank rank={userRank} />
        </div>
      </Grid>
      <Grid item xs={6}>
        <Ranking ranking={ranking} />
      </Grid>
    </Grid>
  )
}

export default Dashboard
