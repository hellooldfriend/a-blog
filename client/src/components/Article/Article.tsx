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

  return (
    <div className="article">
      <h3>{titleState}</h3>
      <p>{contentState}</p>

      <button onClick={handleEdit}>{isEdit ? 'Cancel' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Article;