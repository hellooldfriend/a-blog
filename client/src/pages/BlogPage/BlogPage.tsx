import React, { useState, useEffect } from 'react'
import type { FC } from 'react'
import type { IArticle } from '../../components/types'

import axios from 'axios'

import Articles from '../../components/Articles'
import SearchBar from '../../components/SearchBar'
import ArticleForm from '../../components/ArticleForm'


const API = 'http://localhost:5000'

const BlogPage: FC = () => {
  const canEdit = true
  const [posts, setPosts] = useState<IArticle[]>([])


  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = async () => {
    try {
      const response = await axios.get(`${API}/posts`)
      setPosts(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  const handleSubmit = async (data: IArticle) => {
    await axios.post(`${API}/posts/new`, data)
    getPosts()
  }

  return (
    <div>
      <h1>BlogPage</h1>

      {canEdit && <ArticleForm onSubmit={handleSubmit} />}

      <hr />


      {/* <SearchBar /> */}


      <Articles items={posts} />
    </div>
  );
};

export default BlogPage;