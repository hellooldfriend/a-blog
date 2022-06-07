import React, { useState } from 'react';
import type { FC } from 'react'
import type { IArticle } from '../types'


interface Props {
  onSubmit: (data: Omit<IArticle, 'id'>) => void;
}

const ArticleForm: FC<Props> = ({ onSubmit }) => {
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

  return (
    <div>
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

  );
};

export default ArticleForm;