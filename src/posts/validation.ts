import { z } from 'zod'

const postSchema = z.object({
  id: z.number(),
  contents: z.string(),
})
export const postValidation = postSchema.safeParse

export const userIdValidation = z.coerce.number().safeParse
