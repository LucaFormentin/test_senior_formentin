import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  Typography,
} from '@mui/material'
import RankingCup from './RankingCup'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const podium_colors_arr = [
  'gold-gradient',
  'silver-gradient',
  'bronze-gradient',
]

const RankingListItem = ({ item, index }) => {
  const [animationKey, setAnimationKey] = useState(index)

  useEffect(() => {
    if (index === animationKey) return
    setAnimationKey(index)
  }, [index])

  let bgColor = index <= 2 ? podium_colors_arr[index] : 'bg-zinc-300'

  const itemAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeInOut' } },
  }

  return (
    <ListItem
      key={animationKey}
      component={motion.li}
      variants={itemAnimation}
      className={`flex rounded-md py-2 text-black ${bgColor}`}>
      <ListItemAvatar>
        <Avatar>
          {index > 2 ? (
            <Typography fontWeight='bold'>{index + 1}</Typography>
          ) : (
            <RankingCup index={index} dim={45} />
          )}
        </Avatar>
      </ListItemAvatar>
      <Typography variant='subtitle1'>{item.username}</Typography>
      <Box className='flex ml-auto gap-2 items-center'>
        <Image
          src='/images/posts-icon.png'
          alt='posts-icon'
          width={24}
          height={24}
        />
        <Typography variant='h6' fontWeight='semibold'>
          {item.postCounter} p
        </Typography>
      </Box>
    </ListItem>
  )
}

export default RankingListItem
