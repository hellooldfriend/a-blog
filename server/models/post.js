const client = require('../data/db')


class Post {
  constructor(title, content) {
    this.title = title
    this.content = content
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      client.query(
        'SELECT * FROM posts',
        (error, response) => {
          if(error) reject(error)
          resolve(response?.rows)
        }
      )
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

  static async create(data) {
    return new Promise((resolve, reject) => {
      const { title, content } = data
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
    return new Promise((resolve, reject) => {
      client.query(
        'INSERT INTO posts(title, content) VALUES($1 $2) RETURNING *', 
        [this.title, this.content],
        (error) => {
        if(error) reject(error)
        resolve()
        client.end()  
      })
    })
  }
}

module.exports = Post