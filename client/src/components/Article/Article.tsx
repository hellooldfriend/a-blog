import React from 'react';
import type { FC } from 'react';
import { IArticle } from '../types'


const Article: FC<IArticle> = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Article;