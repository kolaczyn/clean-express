import express from 'express'
import { postRouter } from './posts'
import { PostRepository } from './posts/contracts'
import { userRouter } from './users'

type AppArgs = {
  postRepository: PostRepository
}

export const getApp = ({ postRepository }: AppArgs) => {
  const app = express()

  app.use('/posts', postRouter(postRepository))
  app.use('/users', userRouter)
  return app
}
