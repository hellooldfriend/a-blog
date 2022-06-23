const { Router } = require('express')
const User = require('../models/user')

const router = new Router()

router.get('/', async (request, response) => {
  try {
    const users = await User.getAll()
    response.json(users)
  } catch (e) {
    console.error(e.message)
  }
})



module.exports = router