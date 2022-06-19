import React, { useState } from 'react';
import type { FC } from 'react'
import type { Post } from '../../types'
import './ArticleForm.scss';

interface Props {
  onClose: () => void;
  onSubmit: (data: Omit<Post, 'id'>) => void;
}

const ArticleForm: FC<Props> = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')

  const handleClick = () => {
    onSubmit({
      title,
      content: description,
    })

    setTitle('')
    setDescription('')
  }

  const handleDivContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal_content" onClick={handleDivContentClick}>
        <button className="modal_close" onClick={onClose}>x</button>

        <div className="form">
          <input
            placeholder="Title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <br />
          <br />

          <textarea
            placeholder="Text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <br />
          <br />

          <input
            type="text"
            placeholder="tags"
            value={tags}
            onChange={e => setTags(e.target.value)}
          />

          <br />
          <br />


          <button onClick={handleClick}>Create</button>

        </div>
      </div>
    </div>


  );
};

export default ArticleForm;