import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const NotificationsSchema =   new Schema( {
   data: {
       type: Date,
       default: Date.now
   },
   message: {
       type: String,
   },
   receiver: {
       type: [{
           id: String
       }],
       default: "All"
   }

})

export default  mongoose.model("notifications", NotificationsSchema);