import React, { useState, useEffect } from 'react'
import type { FC } from 'react'
import { Post } from '../../types'

import Articles from '../../components/Articles'
import SearchBar from '../../components/SearchBar'
import ArticleForm from '../../components/ArticleForm'
import Portal from '../../components/Portal'
import Login from '../../components/Login'

import { useStore } from 'effector-react'
import {
  getPosts,
  createPost,
  $postsStore,
} from '../../effector'

import './BlogPage.scss'

const BlogPage: FC = () => {
  const postsStore = useStore($postsStore)
  const { posts } = postsStore

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getPosts()
  }, [])

  const handleSubmit = async (data: Omit<Post, 'id'>) => {
    createPost(data)
    getPosts()
    setShowModal(false)
  }

  return (
    <div className="content">
      <div className="header">
        <div />
        <Login />
      </div>

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