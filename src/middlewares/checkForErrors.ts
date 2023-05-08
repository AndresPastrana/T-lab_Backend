import { validationResult, ValidationError } from "express-validator";
import { Request, Response, NextFunction } from "express";

const checkForErrors = (req: Request, resp: Response, next: NextFunction) => {
  const errors: ValidationError[] = validationResult(req).array();

  if (errors.length > 0) {
    return resp.status(400).json({
      ok: true,
      errors,
      data: null,
    });
  }
  return next();
};

module.exports = { checkForErrors };
