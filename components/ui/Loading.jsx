'use client'

import { LinearProgress, Skeleton, Typography } from '@mui/material'

const Loading = ({ type, label }) => {
  return (
    <div className='w-2/3 p-5 text-center'>
      <Typography>{label}</Typography>
      {type === 'progress' && (
        <LinearProgress className='w-full bg-blue-600/60' />
      )}
      {type === 'skeleton' && <Skeleton variant='rounded' className='w-full'/>}
    </div>
  )
}

export default Loading
