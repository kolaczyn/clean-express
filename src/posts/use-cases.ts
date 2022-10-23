import { PostRepository } from './contracts'

export const getPostById = (postRepository: PostRepository, id: number) =>
  postRepository.getUserById(id)
