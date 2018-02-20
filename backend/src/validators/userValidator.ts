import { validate } from 'joi';
import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import * as userSchemas from '../schemas/userSchema';
import { userRoleSchema } from '../schemas/userRoleSchema';

/**
 * Validate user post object.
 *
 * @param req
 * @param res
 * @param next
 */
export function validateUserSchema(req: Request, res: Response, next: NextFunction) {
  const result = validate(req.body, userSchemas.userSchema);

  if (result.error) {
    res.status(HttpStatus.BAD_REQUEST).json(result.error);
  }

  next();
}

export function validateUserRoleSchema(req: Request, res: Response, next: NextFunction) {
  const result = validate(req.body, userRoleSchema);

  if (result.error) {
    res.status(HttpStatus.BAD_REQUEST).json(result.error);
  }

  next();
}
