import { PostInDb, PostRepository } from './contracts'

const db = [
  {
    id: 2137,
    columnId: '212',
    contents: 'hello from post repository',
  },
]

const getUserById = (id: number): Promise<PostInDb | 'Not found'> =>
  Promise.resolve(db.find((x) => x.id === id) ?? 'Not found')

export const postRepository: PostRepository = {
  getPostById: getUserById,
}
