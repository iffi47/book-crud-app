import BookModel from "~/server/models/Book.model";
import { BookSchema } from "~/server/validation";

export default defineEventHandler(async (event) =>{
  return await BookModel
});