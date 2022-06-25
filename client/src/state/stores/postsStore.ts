import { createStore, forward } from 'effector'
import { createGate } from 'effector-react'

import {
  getPosts,
  createPost,
  deletePost,
  updatePost,
} from '../effects/post'
import type { Post } from '../../types'

type Store = {
  posts: Post[];
}

export const $postsStore = createStore<Store>({
  posts: [],
})
  .on(getPosts.doneData, (state, posts) => ({
    ...state,
    posts,
  }))

export const postsGate = createGate('posts')

forward({
  from: [postsGate.open, createPost, deletePost, updatePost],
  to: getPosts,
})


