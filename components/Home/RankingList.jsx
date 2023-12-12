import { Avatar, Box, List, ListItem, ListItemAvatar, Typography } from '@mui/material'
import RankingCup from './RankingCup'
import Image from 'next/image'

const podium_colors_arr = [
  'gold-gradient',
  'silver-gradient',
  'bronze-gradient',
]

const RankingList = ({ ranking }) => {
  const rankItems = ranking.map((item, index) => {
    let bgColor = index <= 2 ? podium_colors_arr[index] : 'bg-zinc-300'

    return (
      <ListItem
        key={item.id}
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
  })

  return <List className='flex flex-col gap-1'>{rankItems}</List>
}

export default RankingList
