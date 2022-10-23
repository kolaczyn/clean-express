import { PostInDb, PostRepository } from './contracts'

const getUserById = (id: number): PostInDb => ({
  id,
  columnId: '212',
  contents: 'hello from post repository',
})

export const postRepository: PostRepository = {
  getUserById,
}
