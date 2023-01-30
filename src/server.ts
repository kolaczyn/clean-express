import { getApp } from './app'
import { getInMemoryPostRepository } from './posts'

const app = getApp({
  postRepository: getInMemoryPostRepository(),
})
const PORT = 3000

app.listen(PORT, () => {
  console.info(`Listening on http://localhost:${PORT}`)
})
