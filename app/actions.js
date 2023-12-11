'use server'

import { getFileData } from '@/helpers/utils'
import path from 'path'

export const getAllPosts = async () => {
  const postFilepath = path.join(process.cwd(), 'data', 'posts.json')
  const posts = await getFileData(postFilepath)

  return posts
}

const getAllUsers = async () => {
  const usersFilepath = path.join(process.cwd(), 'data', 'users.json')
  const users = await getFileData(usersFilepath)

  return users
}

export const createRanking = async () => {
  const posts = await getAllPosts()
  const users = await getAllUsers()

  const userPostCount = posts.reduce((acc, post) => {
    const { userId } = post

    const userIndex = acc.findIndex(user => user.id === userId)

    if (userIndex !== -1) {
      acc[userIndex].postCounter++
    } else {
      const userInfo = users.find(user => user.id === userId)
      acc.push({ id: userId, name: userInfo.name, postCounter: 1 })
    }

    return acc
  }, [])

  const ranking = refreshRankOrder(userPostCount)

  return ranking
}

const refreshRankOrder = rank =>
  rank.sort((a, b) => {
    if (b.postCounter !== a.postCounter) {
      return b.postCounter - a.postCounter
    }

    return a.id - b.id
  })

export const login = async loggedUserEmail => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?email=${loggedUserEmail}`
  )

  if (!res.ok) throw new Error('Cannot complete the request...')

  const data = await res.json()

  if (data.length === 0) throw new Error('No user founded with this email...')

  const [user] = data

  return user
}
