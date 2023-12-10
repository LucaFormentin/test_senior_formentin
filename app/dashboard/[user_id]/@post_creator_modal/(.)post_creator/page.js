'use client'

import { useRouter } from 'next/navigation'
import CustomModal from '@/components/ui/CustomModal'
import { Alert, AlertTitle, TextField, Typography } from '@mui/material'
import CustomButton from '@/components/ui/CustomButton'
import { useRef } from 'react'
import Image from 'next/image'

const AlertBox = () => {
  return (
    <Alert severity='info'>
      <div className='flex items-center justify-center mx-auto gap-10'>
        <Image
          src='/images/climb.png'
          alt='climb-icon'
          width={62}
          height={62}
        />
        <div>
          <AlertTitle className='font-bold'>Climb the ranking!</AlertTitle>
          Fill out the form to publish a new form and increase your score!
        </div>
      </div>
    </Alert>
  )
}

const PostCreatorModal = () => {
  const router = useRouter()
  const titleRef = useRef()
  const bodyRef = useRef()

  const closeModal = () => router.back()

  const handleSubmit = async e => {
    e.preventDefault()

    const newPost = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
    }

    console.log(newPost)
    //TODO: add post to user posts
    //TODO: update ranking and rank pos
  }

  return (
    <CustomModal open={true} close={closeModal} title='Create new post'>
      <AlertBox />
      <form className='form-container w-2/3' onSubmit={handleSubmit}>
        <TextField
          inputRef={titleRef}
          required
          label='Post title'
          fullWidth
          placeholder='Insert the title'
        />
        <TextField
          inputRef={bodyRef}
          required
          label='Post body'
          fullWidth
          multiline
          rows={5}
          maxRows={5}
          placeholder='Unleash your creativity!'
        />
        <CustomButton type='submit'>Create</CustomButton>
      </form>
    </CustomModal>
  )
}

export default PostCreatorModal
