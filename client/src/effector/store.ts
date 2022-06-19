import { createStore } from 'effector'
import {
  getPosts,
} from './effects/post'
import type { Post } from '../types'

type Store = {
  posts: Post[];
}

export default createStore<Store>({
  posts: [],
})
  .on(getPosts.doneData, (state, posts) => ({
    ...state,
    posts,
  }))

