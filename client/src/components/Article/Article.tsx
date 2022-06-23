import React, { useState } from 'react';
import type { FC } from 'react';
import { Post } from '../../types'
import { Link } from 'react-router-dom';

import { deletePost, getPosts, updatePost } from '../../effector'

const Article: FC<Post> = ({ id, title, content }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [titleState, setTitleState] = useState(title || '')
  const [contentState, setContentState] = useState(content || '')

  const handleDelete = async () => {
    await deletePost(id)
    await getPosts()
  }

  const handleSave = async () => {
    await updatePost({
      id,
      title: titleState,
      content: contentState,
    })
    setIsEdit(false)
    await getPosts()
  }

  return (
    <div className="article">
      {isEdit
        ? <input type="text" value={titleState} onChange={(e) => setTitleState(e.target.value)} />
        : <Link to={`/${id}`}><h3>{titleState}</h3></Link>
      }

      {isEdit
        ? <textarea value={contentState} onChange={e => setContentState(e.target.value)} />
        :  <p>{contentState}</p>
      }

      <button onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Cancel' : 'Edit'}</button>
      <button
        onClick={isEdit ? handleSave : handleDelete}
      >
        {isEdit ? 'Save' : 'Delete'}
      </button>
    </div>
  );
};

export default Article;