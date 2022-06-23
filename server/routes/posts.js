const { Router } = require('express')
const Post = require('../models/post')

const router = new Router()

router.get('/', async (request, response) => {
  try {
    const posts = await Post.getAll()
    response.json(posts)
  } catch(e) {
    console.error(e.message)
  }
})

router.put('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const result = await Post.update(id, request.body)
    response.json(result)
  } catch (e) {
    console.error(e.message)
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const result = await Post.delete(id)
    response.json(result)
  } catch(e) {
    console.error(e.message)
  }
})

router.post('/', async (request, response) => {
  try {
    const result = await Post.create(request.body)
    response.json(result)
  } catch (e) {
    console.error(e.message)
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const result = await Post.getById(id)
    response.json(result)
  } catch(e) {
    console.error(e.message)
  }
})


module.exports = router
