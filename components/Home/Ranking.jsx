import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import RankingCup from './RankingCup'

const podium_colors_arr = ['bg-yellow-500','bg-zinc-500','bg-amber-800']

const Ranking = ({ ranking }) => {
  const rankItems = ranking.map((item, index) => {
    let bgColor = index <=2 ? podium_colors_arr[index] : 'bg-zinc-300'

    return (
      <ListItem
        key={item.id}
        className={`flex rounded-md py-2 text-black ${bgColor}`}>
        <ListItemAvatar>
          <Avatar>
            {index > 2 ? (
              <Typography fontWeight='bold'>{index + 1}</Typography>
            ) : (
              <RankingCup index={index} dim={45}/>
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

  return (
    <div className='flex flex-col items-center justify-center'>
      <Typography variant='h4'>Leaderboard</Typography>
      <List className='flex flex-col gap-1'>{rankItems}</List>
    </div>
  )
}

export default Ranking
