import { createStore } from 'effector'
import { getComments } from '../effects/comments'
import type { CommentType } from '../../types'

type Store = {
  comments: CommentType[];
}

export const $commentsStore = createStore<Store>({
  comments: [],
})
  .on(getComments.doneData, (state, comments) => ({
    ...state,
    comments,
  }))

