'use client'

import { Modal, Typography } from '@mui/material'

const CustomModal = ({ children, ...props }) => {
  //TODO: add animation on open/close
  
  return (
    <Modal
      open={props.open}
      onClose={props.close}
      className='grid place-items-center h-screen mx-auto'>
      <div className='w-1/2 p-5 flex flex-col gap-5 mx-auto justify-center items-center bg-zinc-900 rounded'>
        <Typography variant='h6' className='font-semibold'>
          {props.title}
        </Typography>
        {children}
      </div>
    </Modal>
  )
}

export default CustomModal
