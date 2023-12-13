import {
  Alert,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import { Suspense } from 'react'
import Loading from '../ui/Loading'

const RecentPosts = ({ posts }) => {
  const recentPostsLen = posts.length < 3 ? posts.length : 3
  const recentPosts = posts.slice(-recentPostsLen).sort((a, b) => b.id - a.id)

  const postItems = recentPosts.map(post => (
    <ListItem className='rounded-md bg-zinc-800' key={post.id}>
      <ListItemText
        primary={post.title}
        secondary={post.body.trim().slice(0, 100)}
      />
    </ListItem>
  ))

  return (
    <Paper elevation={2} className='flex flex-col p-5'>
      <h3 className='text-xl'>Recent Posts</h3>
      <Suspense fallback={<Loading type={'skeleton'} />}>
        <List className='flex flex-col gap-2'>{postItems}</List>
      </Suspense>
    </Paper>
  )
}

export default RecentPosts
