import { createRanking } from './actions'
import Home from '../components/Home'

export const HomePage = async () => {
  //TODO: pass to component ranking and display
  // ?? pass ranking to context to have access everywhere
  
  // const ranking = await createRanking()

  return <Home />
}

export default HomePage
