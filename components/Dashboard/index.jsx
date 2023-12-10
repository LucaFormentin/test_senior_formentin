'use client'

import { Grid } from '@mui/material'
import PostsRecap from './PostsRecap'
import CustomButton from '../ui/CustomButton'
import UserRank from './UserRank'

const Dashboard = props => {
  const { userInfo, posts } = props

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={6}
        className='flex flex-col gap-10 justify-center items-center p-2'>
        <h1 className='text-xl font-bold'>
          Welcome to your dashboard, {userInfo.name}!
        </h1>
        <CustomButton type='link' route={`/dashboard/${userInfo.id}/post_creator`}>
          Create new post
        </CustomButton>
        <PostsRecap posts={posts} />
        <UserRank />
      </Grid>
      <Grid item xs={6} className='border'>
        <span>ranking</span>
      </Grid>
    </Grid>
  )
}

export default Dashboard
