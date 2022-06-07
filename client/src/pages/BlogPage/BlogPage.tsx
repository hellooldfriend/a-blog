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


  console.log('POSTS', posts);


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

  const handleSubmit = async (data: Omit<IArticle, 'id'>) => {
    await axios.post(`${API}/posts`, data)
    getPosts()
  }

  return (
    <div className="content">
      <section>
        <SearchBar />
      </section>

      <hr />

      <section>
        {canEdit && <ArticleForm onSubmit={handleSubmit} />}
      </section>

      <hr />

      <section>
        <Articles items={posts} />
      </section>
    </div>
  );
};

export default BlogPage;