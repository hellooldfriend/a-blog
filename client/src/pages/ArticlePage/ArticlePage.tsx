import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { getPost, $postStore } from '../../state'
import { useStore } from 'effector-react'

import Comments from '../../components/Comments'

const ArticlePage = () => {
  const params = useParams();
  const post = useStore($postStore)

  useEffect(() => {
    if(params.id) {
      getPost(params.id)
    }
  }, [])

  if(!post) {
    return <div>Loading...</div>
  }

  const { title, content } = post

  return (
    <div>
      <Link to="/">Home</Link>


      <h1>{title}</h1>
      <p>{content}</p>

      <Comments />
    </div>
  )
}

export default ArticlePage
