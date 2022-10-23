type Validation<T> =
  | {
      success: true
      payload: T
    }
  | {
      success: false
      error: string
    }

// TODO add better validation with zod in middleware
export const validateUserId = (id: string): Validation<number> => {
  if (isNaN(Number(id))) {
    return {
      success: false,
      error: 'The id is not a number',
    }
  }
  return {
    success: true,
    payload: Number(id),
  }
}
