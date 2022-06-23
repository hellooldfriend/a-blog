const express = require('express')
const cors = require('cors')
const postsRouter = require('./routes/posts')
const userRouter = require('./routes/users')
const commentsRouter = require('./routes/comments')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/posts', postsRouter)
app.use('/users', userRouter)
app.use('/comments', commentsRouter)

const startServer = async () => {
  try {
    app.listen(process.env.PORT || 5000, () => console.log(`Server started`))
  } catch (e) {
    console.error(e.message)
  }
}

startServer()
