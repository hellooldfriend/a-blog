const express = require('express')
const cors = require('cors')
const events = require('events')

const PORT = process.env.PORT || 5000
const emitter = new events.EventEmitter()
const app = express()

app.use(cors())
app.use(express.json())


app.get('/posts', (request, response, next) => {
  emitter.once('newPost', (post) => {
    response.json(post)
  })
})

app.post('/posts/new', (reponse, request) => {
  const post = request.body
  emitter.emit('newPost', post)
  response.status(200)
})

app.listen(PORT, () => console.log(`Server started on the port: ${PORT}`))
