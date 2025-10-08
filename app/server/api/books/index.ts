import BookModel from "~/server/models/Book.model";

export default defineEventHandler(async (event) => {
 return await BookModel.find().populate("authors");
});
