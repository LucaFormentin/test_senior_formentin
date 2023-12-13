import { Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import Loading from '../ui/Loading'

const RankingListComponent = dynamic(() => import('./RankingList'), {
  loading: () => (
    <Loading type={'progress'} label={'Who will be on the podium?'} />
  ),
})

const Ranking = ({ ranking }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Typography variant='h4'>Leaderboard</Typography>
      <RankingListComponent ranking={ranking} />
    </div>
  )
}

export default Ranking
