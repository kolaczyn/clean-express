import { Router } from 'express'
import { PostDto, PostRepository } from './contracts'
import { getPostById } from './use-cases'
import { validateUserId } from './validation'

export const postRouter = (postRepository: PostRepository) => {
  const postRouter = Router()

  postRouter.get('/', (req, res) => {
    res.send('hello from posts router')
  })

  postRouter.get('/:id', (req, res) => {
    const { id } = req.params
    // TODO move validation to middleware
    const data = validateUserId(id)
    if (!data.success) {
      return res.status(404).send(data.error)
    }

    return res.send(getPostById(postRepository, data.payload))
  })

  return postRouter
}
