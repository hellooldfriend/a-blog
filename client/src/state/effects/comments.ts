import { createEffect } from 'effector'
import axios from 'axios'

const URL = 'http://localhost:5000'

export const getComments = createEffect(async (id: string) => {
  const url = `${URL}/comments?id=${id}`
  const response = await axios.get(url)
  return response.data
})

export const deleteComment = createEffect(async (id: string) => {
  const url = `${URL}/comments`
  await axios.delete(url)
  return
})
