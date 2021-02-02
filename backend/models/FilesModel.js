import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const FilesSchema =   new Schema( {
   filename: {
       type: String
   },
   date: {
       type: Date,
       default: Date.now
   },
   courseID: {
       type: String
   },
   senderId: {
       type: String
   },
   fileData: {
       type: String
       //gridfs
   }
})

export default  mongoose.model("files", FilesSchema);