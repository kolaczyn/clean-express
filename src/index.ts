import express from 'express'
import { postRouter } from './posts'
import { userRouter } from './users'

const app = express()

app.use('/posts', postRouter)
app.use('/users', userRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`)
})
