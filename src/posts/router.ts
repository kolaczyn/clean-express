import { Router } from 'express'
import { PostRepository } from './contracts'
import { getPostById } from './use-cases'
import { userIdValidation } from './validation'

export const postRouter = (postRepository: PostRepository) => {
  const postRouter = Router()

  postRouter.get('/', (_req, res) => {
    res.send('hello from posts router')
  })

  postRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    const result = userIdValidation(id)

    if (!result.success) {
      return res.status(404).send(result.error)
    }
    const data = await getPostById(postRepository, result.data)
    if (data === 'Not found') {
      return res.status(404).send(data)
    }
    return res.send(data)
  })

  return postRouter
}
