import React, { useState, useEffect } from 'react'
import type { FC } from 'react'
import { Post } from '../../types'

import Articles from '../../components/Articles'
import SearchBar from '../../components/SearchBar'
import ArticleForm from '../../components/ArticleForm'
import Portal from '../../components/Portal'

import { useStore } from 'effector-react'
import { getPosts, createPost } from '../../effector'
import $store from '../../effector/store'

const BlogPage: FC = () => {
  const store = useStore($store)
  const { posts } = store
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getPosts();
  }, [])


  const handleSubmit = async (data: Omit<Post, 'id'>) => {
    createPost(data)
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