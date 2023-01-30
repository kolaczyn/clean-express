import assert from 'assert'
import request from 'supertest'
import { getApp } from '../app'
import { getInMemoryPostRepository } from './in-memory-post-repository'

describe('posts', () => {
  const setup = () => {
    const db = [
      {
        id: 2137,
        columnId: '212',
        contents: 'hello from post repository',
      },
    ]

    const app = getApp({ postRepository: getInMemoryPostRepository(db) })
    return app
  }

  it('returns the found post', async () => {
    const app = setup()

    const response = await request(app).get('/posts/2137')

    expect(response.statusCode).toEqual(200)
    expect(response.body).toMatchObject({
      id: 2137,
      contents: 'hello from post repository',
    })
    expect(response.body.columnId).not.toBeTruthy()
  })

  it('return 404 if post not found', async () => {
    const app = setup()

    const response = await request(app).get('/posts/99999')
    expect(response.statusCode).toEqual(404)
  })

  it('returns 400 if the id is not valid', async () => {
    const app = setup()

    const response = await request(app).get('/posts/invalid-number')
    expect(response.statusCode).toEqual(400)
  })
})
