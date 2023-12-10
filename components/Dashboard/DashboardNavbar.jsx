'use client'

import { Toolbar } from '@mui/material'
import CustomButton from '../ui/CustomButton'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const DashboardNavbar = () => {
  const router = useRouter()

  const handleLogout = () => {
    router.push('/')
    toast.success('Logged out...')
  }

  return (
    <header className='static w-2/3 mx-auto border-b-2 border-b-zinc-600'>
      <Toolbar className='flex items-center'>
        <h1 className='text-xl font-bold'>Personal Area</h1>
        <CustomButton classes='ml-auto' onClick={handleLogout}>
          Logout
        </CustomButton>
      </Toolbar>
    </header>
  )
}

export default DashboardNavbar
