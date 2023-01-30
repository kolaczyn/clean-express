import { GetPostByIdUseCase, PostDto } from './contracts'

export const getPostById: GetPostByIdUseCase = async (postRepository, id) => {
  const dbPost = await postRepository.getPostById(id)
  if (dbPost === 'Not found') {
    return 'Not found'
  }
  const post: PostDto = {
    contents: dbPost.contents,
    id: dbPost.id,
  }
  return post
}
