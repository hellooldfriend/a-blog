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

  static getAll() {
    return new Promise((resolve, reject) => {
      client.query('SELECT * FROM posts',
      (error, response) => {
        if(error) reject(error)
        resolve(response?.rows)
      })
    })
  }

  static async getById(id) {
    return new Promise((resolve, reject) => {
      client.query(
        'SELECT * FROM posts WHERE id=$1',
        [id],
        (error, response) => {
          if(error) reject(error)
          resolve(response.rows[0])
        }
      )
    })
  }

  static async update(id, body) {
    return new Promise((resolve, reject) => {
      const { title, content } = body

      client.query(
        'UPDATE posts SET title=$1, content=$2 WHERE id=$3',
        [title, content, id],
        (error, response) => {
          if(error) reject(error)
          resolve(response?.rows[0])
        }
      )
    })
  }

  static async delete(id) {
    return new Promise((resolve, reject) => {
      client.query(
        'DELETE FROM posts WHERE id=$1',
        [id],
        (error, response) => {
          if(error) reject(response)
          resolve(response?.rows)
        }
      )
    })
  }

  static async create(body) {
    return new Promise((resolve, reject) => {
      const { title, content } = body
      client.query(
        'INSERT INTO posts (title, content) VALUES ($1, $2)',
        [title, content],
        (error, response) => {
          if(error) reject(error)
          resolve(response?.rows)
        }
      )
    })
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
  //
  // static async delete(id) {
  //   const posts = await Post.getAll()
  //   const newPosts = posts.filter(post => post.id !== id);
  //
  //   return new Promise((resolve, reject) => {
  //     fs.writeFile(
  //       path.join(__dirname, '..', 'data', 'posts.json'),
  //       JSON.stringify(newPosts),
  //       (error) => {
  //         if(error) reject(error)
  //         else {
  //           resolve()
  //         }
  //       }
  //     )
  //   })
  // }




}

module.exports = Post