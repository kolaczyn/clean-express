import { PostInDb, PostRepository } from './contracts'

export const getInMemoryPostRepository = (
  initialDbState: PostInDb[] = []
): PostRepository => {
  // eslint-disable-next-line prefer-const
  let db = initialDbState

  const getPostById = (id: number): Promise<PostInDb | 'Not found'> =>
    Promise.resolve(db.find((x) => x.id === id) ?? 'Not found')

  return {
    getPostById,
  }
}
