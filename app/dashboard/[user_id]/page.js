import Dashboard from '../../../components/Dashboard'
import { getUserInfo } from '../actions'

const PersonalDashboard = async ({ params }) => {
  const { user_id } = params

  const info = await getUserInfo(user_id)

  return <Dashboard userInfo={info} />
}

export default PersonalDashboard
