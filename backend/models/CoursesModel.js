import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const CourserSchema =   new Schema( {
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    code: {
        type: String
    },
    teachers: {
      type :[ {
           teacherID:{
               type: String
           }
      }],
      default: []
}

})

export default  mongoose.model("courses", CourserSchema);