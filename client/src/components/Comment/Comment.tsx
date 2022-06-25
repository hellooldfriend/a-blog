import React, { Fragment } from 'react'
import type { FC } from 'react'
import { CommentType } from '../../types'
import './Comment.scss'

import { deleteComment } from '../../state'

type Props = CommentType & {
  onReply: () => void;
}

const Comment: FC<Props> = ({
  id,
  content,
  author,
  datetime,
  onReply,
}) => {

  return (
    <Fragment key={id}>
      <li className="comment">
        {content}
        <br />
        <br />

        <div>
          Author: {author}
          <br />
          Date: {datetime}
        </div>

        <button onClick={onReply}>Reply</button>
        <button onClick={() => deleteComment(id)}>Delete</button>
      </li>
    </Fragment>
  )
}

export default Comment
