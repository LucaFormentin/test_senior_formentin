import MainWrapper from '@/components/ui/MainWrapper'

const PersonalDashboardLayout = ({ children, ...props }) => {
  return (
    <>
      <MainWrapper>{children}</MainWrapper>
      {props.post_creator_modal}
    </>
  )
}

export default PersonalDashboardLayout
