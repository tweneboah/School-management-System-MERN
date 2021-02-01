import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const StudentSchema =   new Schema( {
    userID:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    dateofBirth: {
        type: Date
     },
    nationality: {
        type: String
     },
     religion : {
        type: String
     },
     placeOfBirth : {
        type: String
     },
    email: {
        type: String
    },
    middleName: String,
    physicalAddress: {
        type: String
     },
     postalAddress: {
         type: String
     },
     gender: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "student"
    },
    status: {
        type: String
        //border or day scholar
     },
     fees: {
        type: String
     },
     scholarship: {
        type: String
     },
    telephone: {
        type: String
    },
    classID: {
        type: String
    },
    courses: {
        type: [
            {
                courseID : String
            }
        ]
    },
    nextofKinID: {
        type: String
    },
    profileUrl: {
        type: String
     },
    grade: {
        type: String
     },
     LastSchool: {
        type:{
            school: String,
            reason: String
        }
     },
    password: {
        type: String,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now
    },
})

export default  mongoose.model("students", StudentSchema, "accounts");