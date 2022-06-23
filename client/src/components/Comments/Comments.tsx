import React, { useEffect } from 'react'
import type { FC } from 'react'

import Comment from '../Comment'
import { CommentType } from '../../types'

import { getComments, $commentsStore } from '../../effector'
import { useStore } from 'effector-react'

const Comments: FC = () => {
  const commentsStore = useStore($commentsStore)
  const { comments } = commentsStore

  useEffect(() => {
    getComments()
  }, [])

  if(!comments || !comments.length) {
    return null;
  }

  return (
    <ul>
      {comments.map((item) => <Comment key={item.id} {...item} />)}
    </ul>
  )
}

export default Comments
