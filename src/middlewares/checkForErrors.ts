import { validationResult, ValidationError } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

export const checkForErrors = (
  req: Request,
  resp: Response,
  next: NextFunction
): void => {
  const errors: ValidationError[] = validationResult(req).array()

  if (errors.length > 0) {
    resp.status(400).json({
      ok: true,
      errors,
      data: null
    })

    return
  }
  next()
}
