'use client'

import { CloseRounded } from '@mui/icons-material'
import {
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal,
  Typography,
} from '@mui/material'

const CustomModal = ({ children, ...props }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: '1px transparent',
    borderRadius: 1,
  }

  return (
    <Modal
      open={props.open}
      onClose={props.close}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}>
      <Fade in={props.open}>
        <Box sx={style}>
          <div className='w-full p-5 flex flex-col gap-5 mx-auto justify-center items-center'>
            <Typography variant='h6' className='font-semibold'>
              {props.title}
            </Typography>
            <IconButton onClick={props.close} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <CloseRounded />
            </IconButton>
            {children}
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

export default CustomModal
