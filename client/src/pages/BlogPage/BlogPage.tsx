import React, { useState, useEffect } from 'react'
import type { FC } from 'react'
import type { IArticle } from '../../components/types'

import axios from 'axios'

import Articles from '../../components/Articles'
import SearchBar from '../../components/SearchBar'
import ArticleForm from '../../components/ArticleForm'
import Portal from '../../components/Portal'


const API = 'http://localhost:5000'

const BlogPage: FC = () => {
  const canEdit = true
  const [posts, setPosts] = useState<IArticle[]>([])
  const [showModal, setShowModal] = useState(false)

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
    setShowModal(false)
  }

  return (
    <div className="content">

      <section>
        <SearchBar />

        <button onClick={() => setShowModal(true)}>Add post</button>
      </section>

      <hr />

      <section>
        {showModal &&
          <Portal>
            <ArticleForm
              onSubmit={handleSubmit}
              onClose={() => setShowModal(false)}
            />
          </Portal>
        }
      </section>

      <hr />

      <section>
        <Articles items={posts} />
      </section>
    </div>
  );
};

export default BlogPage;