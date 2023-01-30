import { z } from 'zod'

export const postValidation = z.object({
  id: z.number(),
  contents: z.string(),
}).safeParse

export const userIdValidation = z.coerce.number().safeParse
