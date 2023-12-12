import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from '@mui/material'
import Image from 'next/image'

const Ranking = ({ ranking }) => {
  const rankItems = ranking.map((item, index) => {
    let bgColor = 'bg-zinc-300'
    let iconPath = ''

    switch (index) {
      case 0:
        bgColor = 'bg-yellow-500'
        iconPath = '/images/gold-cup.png'
        break
      case 1:
        bgColor = 'bg-zinc-500'
        iconPath = '/images/silver-cup.png'
        break
      case 2:
        bgColor = 'bg-amber-700 mb-3'
        iconPath = '/images/bronze-cup.png'
        break
      default:
        break
    }

    return (
      <ListItem
        key={item.id}
        className={`flex rounded-md py-2 text-black ${bgColor}`}>
        <ListItemAvatar>
          <Avatar>
            {index > 2 ? (
              <Typography fontWeight='bold'>{index + 1}</Typography>
            ) : (
              <Image src={iconPath} alt='cup-icon' width={45} height={45} />
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
