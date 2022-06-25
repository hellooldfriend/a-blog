import React, { useState } from 'react'
import type { FC } from 'react'
import { Post } from '../../types'

import Articles from '../../components/Articles'
import SearchBar from '../../components/SearchBar'
import ArticleForm from '../../components/ArticleForm'
import Portal from '../../components/Portal'
import Login from '../../components/Login'

import { useStore, useGate } from 'effector-react'
import {
  createPost,
  $postsStore,
  postsGate,
} from '../../state'

import './PostsPage.scss'

const PostsPage: FC = () => {
  useGate(postsGate)
  const postsStore = useStore($postsStore)
  const { posts } = postsStore

  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (data: Omit<Post, 'id'>) => {
    createPost(data)
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

export default PostsPage;