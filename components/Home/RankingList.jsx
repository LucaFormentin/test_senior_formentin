import { List } from '@mui/material'
import RankingListItem from './RankingListItem'
import { AnimatePresence, motion } from 'framer-motion'

const RankingList = ({ ranking }) => {
  const rankItems = ranking.map((item, index) => (
    <RankingListItem key={item.id} item={item} index={index} />
  ))

  const listAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        delayChildren: 0.1,
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: 'beforeChildren',
      },
    },
  }

  return (
    <AnimatePresence>
      <List
        className='flex flex-col gap-1'
        component={motion.ul}
        variants={listAnimation}
        initial='hidden'
        animate='visible'>
        {rankItems}
      </List>
    </AnimatePresence>
  )
}

export default RankingList
