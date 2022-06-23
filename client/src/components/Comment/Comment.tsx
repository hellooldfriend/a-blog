import React from 'react'
import type { FC } from 'react'
import { CommentType as Props } from '../../types'

const Comment: FC<Props> = ({
  content,
  author,
  datetime,
}) => {
  return (
    <li>
      {content}
      <br />
      <br />

      <div>
        Author: {author}
        <br />
        Date: {datetime}
      </div>
    </li>
  )
}

export default Comment
