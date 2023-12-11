import fs from 'fs/promises'

export const getFileData = async filepath => {
  const fileData = await fs.readFile(filepath)
  const data = await JSON.parse(fileData)

  return data
}

export const insertInFile = async (filepath, newData) => {
  const fileData = await getFileData(filepath)
  
  fileData.push(newData)
  const updatedData = JSON.stringify(fileData)

  fs.writeFile(filepath, updatedData, err => {
    if (err) throw new Error(err)
  })

  return { ok: true }
}
