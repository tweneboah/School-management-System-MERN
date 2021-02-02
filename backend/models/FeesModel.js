
import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const FeesSchema =   new Schema( {
    feesFor: {
        type: String,
        required: true
    },
   feesType: {
       type: String
   },
   amount: {
       type: String
   },
   status: {
       type: String
   },
    date: {
        type: Date,
        default: Date.now
    } 
})

export default  mongoose.model("fees", FeesSchema);