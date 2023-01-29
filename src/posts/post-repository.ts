import { PostInDb, PostRepository } from './contracts'

const db = [
  {
    id: 2137,
    columnId: '212',
    contents: 'hello from post repository',
  },
]

const getUserById = (id: number): PostInDb | 'Not found' =>
  db.find((x) => x.id === id) ?? 'Not found'

export const postRepository: PostRepository = {
  getUserById,
}
