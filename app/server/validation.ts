import Joi, { array, number, string } from "joi";

export const AuthorSchema= Joi.object({
  name: Joi.string().min(3).required()
});
export const BookSchema= Joi.object({
  title: Joi.string().min(3).required(),
  published:Joi.date().required(),
  isbn: Joi.string().min(3).required(),
  authors: Joi.array(),
  pageCount: Joi.number()
})