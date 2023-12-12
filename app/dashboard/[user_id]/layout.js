const PersonalDashboardLayout = ({ children, ...props }) => {
  return (
    <>
      <>{children}</>
      {props.post_creator_modal}
    </>
  )
}

export default PersonalDashboardLayout
