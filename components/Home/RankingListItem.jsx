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

const podium_colors_arr = [
  'gold-gradient',
  'silver-gradient',
  'bronze-gradient',
]

const RankingListItem = ({ item, index }) => {
  let bgColor = index <= 2 ? podium_colors_arr[index] : 'bg-zinc-300'

  const itemAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { ease: 'easeInOut' } },
  }

  return (
    <ListItem
      key={item.id}
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
      <Typography>{item.name}</Typography>
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
