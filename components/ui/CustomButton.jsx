import Link from 'next/link'

const CustomButton = ({ children, ...props }) => {
  const btnStyle = `text-center bg-blue-600 hover:bg-blue-800 rounded-md px-10 py-2 ${props.classes}`

  if (props.type === 'link') {
    return (
      <Link className={btnStyle} href={props.route}>
        {children}
      </Link>
    )
  }

  return (
    <button className={btnStyle} {...props}>
      {children}
    </button>
  )
}

export default CustomButton
