import { TextField } from '@mui/material'
import { useRef, useState } from 'react'
import { login } from '../../app/actions'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import CustomButton from '../ui/CustomButton'

const LoginFormHeader = () => {
  return (
    <div>
      <header className='w-full bg-blue-600 flex flex-col justify-center items-center rounded-t-md p-6'>
        <h1 className='text-2xl font-bold'>Login Form</h1>
        <h4 className='text-md'>Enter your email to manage your profile</h4>
      </header>
    </div>
  )
}

const LoginForm = () => {
  const router = useRouter()
  const emailRef = useRef()
  const [hasError, setHasError] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()

    const emailvalue = emailRef.current.value

    try {
      const user = await login(emailvalue)
      const { id: userId } = user

      router.push(`/dashboard/${userId}`)
      toast.success('Login successful!')
    } catch (error) {
      toast.error(error.message)
      setHasError(true)
    }
  }

  return (
    <div>
      <LoginFormHeader />
      <form className='form-container' onSubmit={handleSubmit}>
        <TextField
          inputRef={emailRef}
          required
          variant='outlined'
          label='Email'
          error={hasError}
          helperText={hasError && 'Incorrect email'}
          onChange={() => hasError && setHasError(false)}
        />
        <CustomButton type='submit'>Login</CustomButton>
      </form>
    </div>
  )
}

export default LoginForm
