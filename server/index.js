const express = require('express')
const cors = require('cors')
const events = require('events')
const Post = require('./models/post')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())


app.get('/posts/', async (request, response, next) => {
  const posts = await Post.getAll()
  response.json(posts)
})

app.post('/posts/new', async (request, response) => {
  const { title, content } = request.body
  const post = new Post(title, content)

  await post.save()
  response.end()
})

app.listen(PORT, () => console.log(`Server started on the port: ${PORT}`))
