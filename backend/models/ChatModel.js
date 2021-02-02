import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const ChatSchema =   new Schema( {
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: false
    },
    requestor_id:{
        type: String,
        required: true
    },
    acceptor_id: {
        type: String,
        required: true
    },
    messages: {
        type: [
            {
              senderID: String,
              message: String,
              date : {
                  type: Date,
                  default: Date.now
              }
            }
        ],
        default: []
    }
})

export default  mongoose.model("chats", ChatSchema);