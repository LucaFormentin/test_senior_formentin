'use client'

import { useParams, useRouter } from 'next/navigation'
import CustomModal from '@/components/ui/CustomModal'
import { Alert, AlertTitle, TextField } from '@mui/material'
import CustomButton from '@/components/ui/CustomButton'
import { useRef } from 'react'
import Image from 'next/image'
import { insertNewPost } from '@/app/dashboard/actions'
import toast from 'react-hot-toast'
import { useRankingContext } from '@/app/context/RankingContextProvider'
import { createRanking } from '@/app/actions'

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
  const { updateRanking } = useRankingContext()
  const router = useRouter()
  const params = useParams()
  const titleRef = useRef()
  const bodyRef = useRef()

  const closeModal = () => router.back()

  const handleSubmit = async e => {
    e.preventDefault()

    const newPost = {
      userId: +params?.user_id || 0,
      title: titleRef.current.value,
      body: bodyRef.current.value,
    }

    const res = await insertNewPost(newPost)

    if (!res.ok) {
      toast.error('Cannot create this post. Please retry...')
      return
    }
    
    toast.success('Congrats! You have created a new post!!')

    const newRanking = await createRanking()
    updateRanking(newRanking)

    closeModal()
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
          placeholder='Unleash your creativity!'
        />
        <CustomButton type='submit'>Create</CustomButton>
      </form>
    </CustomModal>
  )
}

export default PostCreatorModal
