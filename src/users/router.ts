import { Router } from 'express'

export const userRouter = Router()

userRouter.get('/', (_req, res) => {
  res.send('hello from user router')
})