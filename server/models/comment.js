const client = require('../data/db')

class Comment {
  constructor(content, author, datetime, parent) {
    this.content = content
    this.author = author
    this.datetime = datetime
    this.parent = parent
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      client.query(
        'SELECT * FROM comments',
        (error, response) => {
          if(error) reject(error)
          resolve(response?.rows)
        }
      )
    })
  }
}

module.exports = Comment
