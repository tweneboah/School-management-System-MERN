import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const TeacherSchema =   new Schema( {
    _id: String,
    userID: String,
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    title: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
     },
     gender: {
        type: String,
        required: true
    },
    dateofBirth: {
        type: String
    },
    department: {
        type: String
    },
    role: {
        type: String,
        default: "Teacher"
    },
    qualifiations: {
        type: String
    },
    salary: {
        type: String
    },
    positions: {
        type: [{
            position: String,
            department: String,
            date: {
                type: Date,
                default: Date.now
            }
        }],
        default: []
    },
    telephone: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    classes: {
        type: [{
            classID: String,
            startdate: {
                type: Date,
                default: Date.now
            }
        }],
        default: []

    },
    courses: {
        type: [
        {
            courseID : String,
            classID: String,
            startDate: {
                type: Date,
                default: Date.now
            }
         }
      ] ,
      default: []
    },
    nextofKinID: {
        type: String
    },
    profileUrl: {
        type: String
    },
    healthyCondition: {
        type: String
    },
    nationality: {
        type: String
    },
    religion: {
        type: String,
    },
    date: { 
        type: Date, 
        default: Date.now
    },
})

export default  mongoose.model("teachers", TeacherSchema, "accounts");