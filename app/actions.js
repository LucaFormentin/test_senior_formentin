'use server'

import { connectToDb, findUserByEmail } from '@/helpers/db'

export const getAllPostsFromDb = async () => {
  const {client, db} = await connectToDb()
  const entries = await db.collection('posts')

  const posts = await entries.find({}).toArray((err,list)=>{
    if (err) throw new Error(err)

    return clearEntriesFromDb(list)
  })

  client.close()
  return posts
}

export const getAllUsersFromDb = async () => {
  const { client, db } = await connectToDb()
  const entries = await db.collection('users')

  const users = await entries.find({}).toArray((err, list) => {
    if (err) throw new Error(err)

    return clearEntriesFromDb(list)
  })

  client.close()
  return users
}

const clearEntriesFromDb = (entries) => {
  return entries.map(entry => {
    const {_id, ...clearedEntry} = entry
    return clearedEntry
  })
}

export const createRanking = async () => {
  const posts = await getAllPostsFromDb()
  const users = await getAllUsersFromDb()

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
  const {client, db} = await connectToDb()
  const exisitingUser = await findUserByEmail(db, loggedUserEmail)

  if (!exisitingUser) throw new Error('No user founded with this email!')

  client.close()
  return exisitingUser
}
