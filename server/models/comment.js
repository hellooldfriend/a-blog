const client = require('../data/db')

class Comment {
  constructor(content, author, datetime, parent) {
    this.content = content
    this.author = author
    this.datetime = datetime
    this.parent = parent
  }

  static getAll(postId) {
    return new Promise((resolve, reject) => {
      client.query(
        'SELECT * FROM comments WHERE post_id=$1',
        [postId]  ,
        (error, response) => {
          if(error) reject(error)
          resolve(response?.rows)
        }
      )
    })
  }

  static async update(id, body) {
    return new Promise((resolve, reject) => {

    })
  }

  static async delete(id) {
    return new Promise((resolve, reject) => {
      client.query(
        'DELETE FROM comments WHERE id=$1',
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
      const { content, author, datetime, parent, post_id } = data
      client.query(
        `INSERT INTO comments 
        (content, author, datetime, parent, post_id)
        VALUES ($1, $2, $3, $4, $5)`,
        [content, author, datetime, parent, post_id],
        (error, response) => {
          if(error) reject(error)
          resolve(response?.rows)
        }
      )
    })
  }
}

module.exports = Comment
