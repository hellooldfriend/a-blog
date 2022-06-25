const { Router } = require('express')
const Comment = require('../models/comment')

const router = new Router()

router.get('/', async (request, response) => {
  try {
    const { id } = request.query
    const comments = await Comment.getAll(id)
    response.json(comments)
  } catch(e) {
    console.error(e.message)
  }
})

module.exports = router
