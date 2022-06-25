import React, { useState, useEffect, Fragment } from 'react'
import type { FC } from 'react'
import { useParams } from 'react-router-dom';

import Comment from '../Comment'

import { getComments, $commentsStore } from '../../state'
import { useStore} from 'effector-react'
import CommentForm from '../CommentForm'
import { CommentType } from '../../types'

const Comments: FC = () => {
  const [showForm, setShowForm] = useState(false)
  const [currentId, setCurrentId] = useState<number | null>(null)


  const params = useParams();
  const commentsStore = useStore($commentsStore)
  const { comments } = commentsStore

  useEffect(() => {
    if(params.id) {
      getComments(params.id)
    }
  }, [])

  if(!comments || !comments.length) {
    return null;
  }

  const mainComments = comments.filter(({ parent }) => parent === null);

  const handleReply = () => {
    setShowForm(true)
  }

  const renderReplies = (replies: CommentType[]) => {
    return replies.length
      ? <ul>{replies.map((props) => {
        return (
          <Fragment key={props.id}>
            <Comment {...props} onReply={handleReply} />
          </Fragment>
        )
      })}</ul>
        : null
  }

  return (
    <ul>
      {mainComments.map((item) => {
        const replies = comments.filter(({ parent })=> parent !== null && parent === item.id) || []

        return (
          <Fragment key={item.id}>
            <Comment {...item}  onReply={handleReply} />
            {renderReplies(replies)}
          </Fragment>
        )
      })}

      <CommentForm onAdd={(data) => console.log(data)} />
    </ul>
  )
}

export default Comments;
