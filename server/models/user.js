const client = require('../data/db')

class User {

  static getAll() {
    return new Promise((resolve, reject) => {
      client.query(
        'SELECT * FROM accounts',
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
        'SELECT * FROM accounts WHERE id=$1',
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
      const { name, lastname, email } = body

      client.query(
        'UPDATE accounts SET name=$1, lastname=$2, email=$3 WHERE id=$4',
        [name, lastname, email, id],
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
        'DELETE FROM accounts WHERE id=$1',
        [id],
        (error, response) => {
          if(error) reject(response)
          resolve(response?.rows)
        }
      )
    })
  }

  static async create(body) {
    const { name, lastname, email } = body
    client.query(
      'INSERT INTO accounts (name, lastname, email) values ($1, $2, $3) RETURNING *',
      [name, lastname, email],
      (error, response) => {
        if(error) reject(error)
        resolve(response?.rows)
      }
    )
  }

}

module.exports = User