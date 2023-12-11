'use client'

import { createContext, useContext, useState } from 'react'

const RankingContext = createContext({})

export const RankingContextProvider = ({ children }) => {
  const [ranking, setRanking] = useState([])

  const updateRanking = newRanking => setRanking(newRanking)

  return (
    <RankingContext.Provider value={{ ranking, updateRanking }}>
      {children}
    </RankingContext.Provider>
  )
}

export const useRankingContext = () => useContext(RankingContext)
