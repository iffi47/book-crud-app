import mongoose from "mongoose";
export default async (nitroApp) =>{
  // run your connect code here
  const config= useRuntimeConfig();
  //coonection to mongoDB
  mongoose.connect(config.MONGOOSE_URI)
  .then(() => console.log("Connection connected"))
  .catch((e) => console.log(e));

}
