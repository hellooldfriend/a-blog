import { createStore, forward } from 'effector'
import { getComments } from '../effects/comments'
import type { CommentType } from '../../types'
import { createGate } from 'effector-react'

import {
  deleteComment,
} from '../effects/comments'

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

export const commentsGate = createGate('comments')

forward({
  from: deleteComment,
  to: getComments,
})
