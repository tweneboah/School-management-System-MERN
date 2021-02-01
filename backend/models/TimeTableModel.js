import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const TimetableSchema =   new Schema( {
   start_time: {
       type: Date,
       default: Date.now
   },
   end_time: {
       type: Date
   },
   weekDate: String,
   courseID: String
})

export default  mongoose.model("timetable", TimetableSchema);