'use server'

import { getAllPostsFromDb, getAllUsersFromDb } from '../actions'
import { connectToDb } from '@/helpers/db'

export const getUserInfo = async userId => {
  const allUsers = await getAllUsersFromDb()
  const existingUser = allUsers.find(user => user.id === +userId)

  if (!existingUser) throw new Error('Error during retrieving user info...')

  return existingUser
}

export const getUserRelativePosts = async userId => {
  const allPosts = await getAllPostsFromDb()
  const relativePosts = allPosts.filter(post => post.userId === userId)

  return relativePosts
}

export const insertNewPost = async postData => {
  const allPosts = await getAllPostsFromDb()
  const totalPosts = allPosts.length

  const newPost = { ...postData, id: totalPosts + 1 }

  const { client, db } = await connectToDb()
  try {
    await db.collection('posts').insertOne(newPost)

    client.close()
    return { ok: true }
  } catch (error) {
    return { ok: false, message: 'Cannot create this post. Please retry...' }
  }
}
