import { MongoClient } from 'mongodb'

export const connectToDb = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI)
  const db = client.db(process.env.MONGODB_DB)

  return { client, db }
}

export const findUserByEmail = async (db, email) => {
  return await db
    .collection('users')
    .findOne({ email })
    .then(user => user || null)
}
