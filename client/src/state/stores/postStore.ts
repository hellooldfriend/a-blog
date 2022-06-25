import { createStore } from 'effector'
import { getPost } from '../effects/post'
import type { Post } from '../../types'

export const $postStore = createStore<Post | null>(null)
  .on(getPost.doneData, (state, post) => post);
