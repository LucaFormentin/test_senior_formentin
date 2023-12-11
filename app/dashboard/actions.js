'use server'

import { insertInFile } from '@/helpers/utils'
import { getAllPosts, getAllUsers } from '../actions'
import path from 'path'

export const getUserInfo = async userId => {
  const allUsers = await getAllUsers()
  const existingUser = allUsers.find(user => user.id === +userId)

  if (!existingUser) throw new Error('Error during retrieving user info...')

  return existingUser
}

export const getUserRelativePosts = async userId => {
  const allPosts = await getAllPosts()
  const relativePosts = allPosts.filter(post => post.userId === userId)

  return relativePosts
}

export const insertNewPost = async postData => {
  const allPosts = await getAllPosts()
  const totalPosts = allPosts.length

  const newPost = { ...postData, id: totalPosts + 1 }

  const postFilepath = path.join(process.cwd(), 'data', 'posts.json')

  const res = await insertInFile(postFilepath, newPost)

  return res
}
