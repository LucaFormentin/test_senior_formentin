'use server'

import { insertInFile } from '@/helpers/utils'
import { getAllPosts } from '../actions'
import path from 'path'

export const getUserInfo = async userId => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  )

  if (!res.ok) throw new Error('Cannot complete the request...')

  const data = await res.json()

  if (data.length === 0) throw new Error('Error during retrieving user info...')

  const [info] = data

  return info
}

export const getUserRelativePosts = async userId => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )

  if (!res.ok) throw new Error('Cannot complete the request...')

  const posts = await res.json()

  if (posts.length === 0) throw new Error('No posts yet for this user.')

  return posts
}

export const insertNewPost = async postData => {
  const allPosts = await getAllPosts()
  const totalPosts = allPosts.length

  const newPost = { ...postData, id: totalPosts + 1 }

  const postFilepath = path.join(process.cwd(), 'data', 'posts.json')

  const res = await insertInFile(postFilepath, newPost)

  return res
}
