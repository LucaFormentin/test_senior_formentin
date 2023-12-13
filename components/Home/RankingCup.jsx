import Image from 'next/image'

const RankingCup = ({ index, dim }) => {
  let iconPath = null

  switch (index) {
    case 0:
      iconPath = '/images/gold-cup.png'
      break
    case 1:
      iconPath = '/images/silver-cup.png'
      break
    case 2:
      iconPath = '/images/bronze-cup.png'
      break
    default:
      break
  }

  return <Image src={iconPath ?? '/images/climb.png'} alt='cup-icon' width={dim} height={dim} />
}

export default RankingCup
