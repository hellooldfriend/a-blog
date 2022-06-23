import { createEffect } from 'effector'
import axios from 'axios'
import type { User } from '../../types'

const URL = 'http://localhost:5000'

export const getUsers = createEffect(async () => {
  const url = `${URL}/users`
  const response = await axios.get(url)
  return response.data
})

