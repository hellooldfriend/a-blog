const { nanoid } = require('nanoid')
const fs = require('fs')
const path = require('path')
const client = require('../data/db')


class Post {
  constructor(title, content) {
    this.id = nanoid()
    this.title = title
    this.content = content
  }

  async save() {
    // const post = this.toJSON()

    return new Promise((resolve, reject) => {
      client.query(
        'INSERT INTO posts(title, content) VALUES($1 $2) RETURNING *', 
        [this.title, this.content],
        (error, response) => {
        if(error) reject(error)
        resolve()
        client.end()  
      })
    })
  }

  static async delete(id) {
    const posts = await Post.getAll()
    const newPosts = posts.filter(post => post.id !== id);

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'posts.json'),
        JSON.stringify(newPosts),
        (error) => {
          if(error) reject(error)
          else {
            resolve()
          }
        }
      )
    })
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      client.query('SELECT * from posts', (error, response) => {
        if(error) reject(error)
        resolve(response.rows)
        client.end()
      })
    })
  }

  static async getById(id) {
    const posts = await Post.getAll()
    return posts.find(post => post.id === id)
  }

  static async update(post) {
    const posts = await Post.getAll()
    const index = posts.findIndex(p => p.id === post.id)
    posts[index] = post

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'posts.json'),
        JSON.stringify(posts),
        (error) => {
          if(error) reject(error)
          else {
            resolve()
          }
        }
      )
    })
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
    }
  }

}

module.exports = Post