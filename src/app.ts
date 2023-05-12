import express from 'express'
import { postRouter } from './posts'
import { PostRepository } from './posts/contracts'

type AppArgs = {
  postRepository: PostRepository
}

export const getApp = ({ postRepository }: AppArgs) => {
  const app = express()

  app.use('/posts', postRouter(postRepository))
  return app
}
