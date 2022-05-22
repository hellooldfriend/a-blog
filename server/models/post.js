const { nanoid } = require('nanoid')
const fs = require('fs')
const path = require('path')


class Post {
  constructor(title, content) {
    this.id = nanoid()
    this.title = title
    this.content = content
  }

  async save() {
    const posts = await Post.getAll()
    posts.push(this.toJSON())

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

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'posts.json'),
        'utf-8',
        (error, content) => {
          if(error) reject(error)
          else {
            resolve(JSON.parse(content))
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