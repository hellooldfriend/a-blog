import React from 'react'
import { FC } from 'react'
import { Post } from '../../types'

import Article from '../Article'

interface Props {
  items: Post[];
}

const Articles: FC<Props> = ({ items }) => {

  if (items.length === 0 || !items) {
    return <h2>Nothing to see here yet</h2>
  }

  return (
    <div>

      {items.map((item) => <Article key={item.id} {...item} />)}
    </div>
  )
}

export default Articles