const client = require('../data/db')

class UserController {
  async createUser(request, response) {
    const { name, surname } = request.body
    const user = await client.query(
      'INSERT INTO accounts (name, surname) values ($1 $2) RETURNING *',
      [name, surname]
    )
    response.json(user)
  }

  async getUsers(request, response) {

  }
  async getUserById(request, response) {

  }
  async updateUser(request, response) {

  }
  async deleteUser(request, response) {

  }
}

module.exports = new UserController()