import {
  Alert,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import CustomButton from '../ui/CustomButton'

const PostsRecap = ({ userId, postsLen }) => {
  const fallbackContent = (
    <Alert severity='warning'>Seems you have not published posts yet.</Alert>
  )

  const postsCounter =
    postsLen === 0 ? (
      fallbackContent
    ) : (
      <Typography variant='h2' fontWeight='bold'>
        {postsLen}
      </Typography>
    )

  return (
    <Paper elevation={2} className='flex w-full p-5'>
      <Box display={'flex'} flexDirection={'column'} gap={0.5}>
        <h3 className='text-xl'>Your Posts</h3>
        {postsCounter}
        <CustomButton
          type='link'
          route={`/dashboard/${userId}/post_creator`}
          classes='mt-auto'>
          Add new post
        </CustomButton>
      </Box>
    </Paper>
  )
}

export default PostsRecap
