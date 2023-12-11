import {
  Alert,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  paperClasses,
} from '@mui/material'

const PostsRecap = ({ posts }) => {
  const fallbackContent = (
    <Alert severity='warning'>Seems you have not published posts yet.</Alert>
  )

  const postsCounter =
    posts.length === 0 ? (
      fallbackContent
    ) : (
      <Typography variant='h2' fontWeight='bold'>{posts.length}</Typography>
    )

  const recentPosts = posts.slice(posts.length < 2 ? -posts.length : -2).map(post => (
    <ListItem className='rounded-md bg-zinc-800' key={post.id}>
      <ListItemText primary={post.title} secondary={post.body.trim().slice(0,100)}/>
    </ListItem>
  ))

  return (
    <Paper elevation={2} className='flex w-full p-5'>
      <Box>
        <h3 className='text-xl'>Your Posts</h3>
        {postsCounter}
      </Box>
      {posts.length > 0 && (
        <Box className='w-2/3 ml-auto'>
          <h3 className='text-xl'>Recent Posts</h3>
          <List className='flex flex-col gap-2'>
            {recentPosts}
          </List>
        </Box>
      )}
    </Paper>
  )
}

export default PostsRecap
