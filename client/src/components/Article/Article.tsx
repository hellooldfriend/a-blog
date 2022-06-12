import React, { useState } from 'react';
import type { FC } from 'react';
import { IArticle } from '../types'
import axios from 'axios'


const Article: FC<IArticle> = ({ id, title, content }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [titleState, setTitleState] = useState(title || '')
  const [contentState, setContentState] = useState(content || '')


  const handleEdit = () => {
    setIsEdit(prev => !prev)
  }

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/posts/${id}`)
    window.location.reload()
  }

  const handleSave = async () => {
    await axios.put(`http://localhost:5000/posts/${id}`, {
      title: titleState,
      content: contentState,
    })
    window.location.reload()
  }

  return (
    <div className="article">
      {isEdit
        ? <input type="text" value={titleState} onChange={(e) => setTitleState(e.target.value)} />
        : <h3>{titleState}</h3>
      }

      {isEdit
        ? <textarea value={contentState} onChange={e => setContentState(e.target.value)} />
        :  <p>{contentState}</p>
      }

      <button onClick={handleEdit}>{isEdit ? 'Cancel' : 'Edit'}</button>
      <button
        onClick={isEdit ? handleSave : handleDelete}
      >
        {isEdit ? 'Save' : 'Delete'}
      </button>
    </div>
  );
};

export default Article;