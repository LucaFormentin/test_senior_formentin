'use server'

const getAllPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return data
}

const getAllUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return data
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

  const ranking = userPostCount.sort((a, b) => {
    if (b.postCount !== a.postCount) {
      return b.postCount - a.postCount
    }

    return a.id - b.id
  })

  return ranking
}

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
