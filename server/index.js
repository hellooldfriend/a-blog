const express = require('express')
const cors = require('cors')
const events = require('events')
const Post = require('./models/post')
const client = require('./data/db')


const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000


// client.query('SELECT * from posts', (err, res) => {
//   console.log(err, res.rows)
//   client.end()
// })

app.get('/posts/', async (request, response) => {
  try {
    const posts = await Post.getAll()
    response.json(posts)
  } catch(e) {
    throw new Error(e)
  }
})

app.get('/posts/:id', async (request, response) => {
  // open post page
})

app.delete('/posts/:id', async (request, response) => {
  console.log('delete', request.params)
  const { id } = request.params
  await Post.delete(id)
  response.end()
})

app.post('/posts', async (request, response) => {
  const { title, content } = request.body
  const post = new Post(title, content)

  await post.save()
  response.end()
})


const startServer = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on the port: ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

startServer()
