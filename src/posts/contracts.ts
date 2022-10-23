export type PostRepository = {
  getUserById: (id: number) => PostInDb
}

export type PostInDb = {
  contents: string
  id: number
  columnId: string
}

export type GetPostByIdUseCase = (id: number) => PostDto

export type PostDto = {
  contents: string
  id: number
}
