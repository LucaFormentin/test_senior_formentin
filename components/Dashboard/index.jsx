'use client'

import { Grid } from '@mui/material'
import PostsRecap from './PostsRecap'
import CustomButton from '../ui/CustomButton'
import UserRank from './UserRank'
import Ranking from '../Home/Ranking'
import { useRankingContext } from '@/app/context/RankingContextProvider'

const Dashboard = props => {
  const { userInfo, posts } = props
  const { ranking } = useRankingContext()

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <div
          className='flex flex-col border items-center justify-center gap-10 p-2'>
          <h1 className='text-xl font-bold'>
            Welcome to your dashboard, {userInfo.name}!
          </h1>
          <CustomButton
            type='link'
            route={`/dashboard/${userInfo.id}/post_creator`}>
            Create new post
          </CustomButton>
          <PostsRecap posts={posts} />
          <UserRank userId={userInfo.id}/>
        </div>
      </Grid>
      <Grid item xs={6}>
        <Ranking ranking={ranking} />
      </Grid>
    </Grid>
  )
}

export default Dashboard
