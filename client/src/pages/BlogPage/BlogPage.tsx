import React, { useState, useEffect } from 'react'
import type { FC } from 'react'
import type { IArticle } from '../../components/types'

import axios from 'axios'

import Articles from '../../components/Articles'
import SearchBar from '../../components/SearchBar'
import ArticleForm from '../../components/ArticleForm'

const mockData: IArticle[] = [
  {
    id: '1',
    title: 'Title 1',
    content: 'Some content 1'
  },
  {
    id: '2',
    title: 'Title 2',
    content: 'Some content 2'
  },
  {
    id: '3',
    title: 'Title 3',
    content: 'Some content 3'
  },
]

const API = 'http://localhost:5000'

const BlogPage: FC = () => {
  const [canEdit, setCanEdit] = useState(true)
  const [posts, setPosts] = useState<IArticle[]>([])


  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = async () => {
    try {
      console.log('API', `${API}/posts`)
      const response = await axios.get(`${API}/posts`)
      console.log('response', response)
    } catch (e) {
      console.error(e)
    }
  }

  const handleSubmit = async (data: IArticle) => {
    await axios.post(`${API} / posts / new `, data)
  }

  return (
    <div>
      <h1>BlogPage</h1>

      {canEdit && <ArticleForm onSubmit={handleSubmit} />}

      <hr />


      {/* <SearchBar /> */}


      <Articles items={mockData} />
    </div>
  );
};

export default BlogPage;