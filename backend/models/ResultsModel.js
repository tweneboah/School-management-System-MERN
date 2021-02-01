import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const ResultsSchema =   new Schema( {
   studentID: String,
   teacherID: String,
   courseID: String,
   score: String,
   total: String,
   date: {
       type: Date,
       string: Date.now
   }

})

export default  mongoose.model("results", ResultsSchema);