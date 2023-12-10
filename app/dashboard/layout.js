import DashboardNavbar from '../../components/Dashboard/DashboardNavbar'
import MainWrapper from '../../components/ui/MainWrapper'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardNavbar />
      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

export default DashboardLayout
