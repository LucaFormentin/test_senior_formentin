import DashboardNavbar from '../../components/Dashboard/DashboardNavbar'
import MainWrapper from '../../components/ui/MainWrapper'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardNavbar />
      <>{children}</>
    </>
  )
}

export default DashboardLayout
