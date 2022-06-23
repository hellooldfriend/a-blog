import { createStore } from 'effector'
import {
  getPosts,
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

