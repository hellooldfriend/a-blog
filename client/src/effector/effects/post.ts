import { createEffect } from 'effector'
import axios from 'axios'
import type { Post } from '../../types'

const URL = 'http://localhost:5000'

export const getPosts = createEffect(async () => {
  const url = `${URL}/posts`
  const response = await axios.get(url)
  return response.data
})

export const createPost = createEffect(async (data: Omit<Post, 'id'>) => {
  const url = `${URL}/posts`
  const response = await axios.post(url, data)
  return response.data
})

export const deletePost = createEffect(async (id: string) => {
  const url = `${URL}/posts/${id}`
  await axios.delete(url)
  return
})

export const updatePost = createEffect(async (data: Post) => {
  const { id, ...body } = data
  const url = `${URL}/posts/${id}`
  await axios.put(url, body)
  return
})