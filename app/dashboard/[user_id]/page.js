import Dashboard from '../../../components/Dashboard'
import { getUserInfo, getUserRelativePosts } from '../actions'

const PersonalDashboard = async ({ params }) => {
  const { user_id } = params

  const info = await getUserInfo(user_id)
  const posts = await getUserRelativePosts(user_id)

  return <Dashboard userInfo={info} posts={posts} />
}

export default PersonalDashboard
