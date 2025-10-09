import BookModel from "~/server/models/Book.model";
import { BookSchema } from "~/server/validation";
import { defineEventHandler, readBody, createError } from "h3";
import type { H3Event } from "h3";

export default defineEventHandler( async(event:H3Event) =>{
  //Get Body Data 
  const body= await readBody(event);
  //get id from params
  const { id } = event.context.params as { id: string };
  let { error } = BookSchema.validate(body,{abortEarly: true, allowUnknown: true});
  if(error){
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false
    })
  }
  //Update Book
  try {
    await BookModel.findByIdAndDelete(id, body);
    return {
      message: "Book Deleted Successfully!"
    }
  } catch (e) {
      if (e instanceof Error) {
      throw createError({
        statusMessage: e.message,
      });
    }
    throw createError({
      statusMessage: String(e),
    });
  }

})