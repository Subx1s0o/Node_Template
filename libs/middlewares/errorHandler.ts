import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';

export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpError) {
    const errors = err?.details || [];

    res.status(err.status).json({
      status: err.status,
      message: err.message,
      errors: errors.length > 0 ? errors : ['Unknown error']
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    errors: [err.message]
  });
};
