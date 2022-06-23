import { createEffect } from 'effector'
import axios from 'axios'
import type { CommentType } from '../../types'

const URL = 'http://localhost:5000'

export const getComments = createEffect(async () => {
  const url = `${URL}/comments`
  const response = await axios.get(url)
  return response.data
})
