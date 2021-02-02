import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const AttendanceSchema =   new Schema( {
    userID: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        default: Date.now
    },
    startLocation: {
        type: String,
        default: null
    },
    endTime: {
        type: String,
        default: null
    },
    endLocation: {
       type: String,
       default: null
    },
    date: {
        type: Date, 
        default: Date.now
     },
})

export default  mongoose.model("attendance", AttendanceSchema);