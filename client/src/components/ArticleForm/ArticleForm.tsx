import React, { useState } from 'react';
import type { FC } from 'react'
import type { IArticle } from '../types'


interface Props {
  onSubmit: (data: IArticle) => void;
}

const ArticleForm: FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleClick = () => {
    onSubmit({
      id: Date.now().toString(),
      title,
      content: description,
    })
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleClick}>Create</button>

    </div>

  );
};

export default ArticleForm;