import { List, ListItem, Typography } from '@mui/material'

const Ranking = ({ ranking }) => {
  const rankItems = ranking.map((item, index) => (
    <ListItem key={item.id}>
      {index + 1} - {item.name} - {item.postCounter}
    </ListItem>
  ))

  return (
    <>
      <Typography variant='h4'>Leaderboard</Typography>
      <List>{rankItems}</List>
    </>
  )
}

export default Ranking
