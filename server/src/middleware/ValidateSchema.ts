import { Request, Response, NextFunction } from "express";
import Joi, { ObjectSchema } from "joi";
import Logging from "../library/Logging.js";
import { IUser } from "./../models/User.js";

export const ValidateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      Logging.error(err);
      return res.status(422).json({ err });
    }
  };
};

export const Schemas = {
  user: {
    create: Joi.object<IUser>({
      name: Joi.string().required(),
    }),
    update: Joi.object<IUser>({
      name: Joi.string().required(),
    }),
  },
};
