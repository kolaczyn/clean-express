export type PostRepository = {
  getPostById: (id: number) => Promise<PostInDb | 'Not found'>
}

export type PostInDb = {
  contents: string
  id: number
  columnId: string
}

export type GetPostByIdUseCase = (
  postRepository: PostRepository,
  id: number
) => Promise<PostDto | 'Not found'>

export type PostDto = {
  contents: string
  id: number
}
