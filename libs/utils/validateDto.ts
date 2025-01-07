import createHttpError from 'http-errors';
import { ZodError, ZodSchema } from 'zod';

export const validateBody = <T>(schema: ZodSchema<T>, body: T): T => {
  try {
    return schema.parse(body);
  } catch (err) {
    if (err instanceof ZodError) {
      throw createHttpError(400, 'Bad Request', {
        details: err.errors.map((error) => ({
          field: error.path.join('.'),
          message: error.message
        }))
      });
    } else {
      throw err;
    }
  }
};
