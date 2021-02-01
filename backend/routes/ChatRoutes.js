import express from "express";
import ChatModel from "../models/ChatModel.js";
import {sendFriendRequest, sendMessage} from '../middlewares/validate.js'

const route = express.Router();

route.get('/', async(req, res) => {
    const ads = await ChatModel.find();
    res.json(ads);
})



//send friend request
route.post('/create', async(req, res) => {
    let body = req.body
    const {error} = sendFriendRequest.validate(body);
     if(error){
         console.log(error)
     return  res.json({success: false, error : error.details[0].message})
     }

     //check if there is aconnection already
    const checkConnection = ChatModel.findOne({
        acceptor_id: body.acceptor_id,
        requestor_id: body.requestor_id
    })

    if(checkConnection){
        return res.json({success: false, error: "You are already friends"})
    }

    ChatModel.create(body)
    .then(doc => {
        return res.json({success: true, doc});
      })
    .catch(err => {
        console.log(err)
       return  res.json({success: false, error:err})
    })
  });





//accept friend request
route.post('/request/:id', async(req, res) => {
    let body = req.body
    const {error} = sendFriendRequest.validate(body);
     if(error){
         console.log(error)
     return  res.json({success: false, error : error.details[0].message})
     }

     //check if there is aconnection already
    const checkConnection = ChatModel.findOne({
        acceptor_id: body.acceptor_id,
        requestor_id: body.requestor_id,
        status: true
    })

    if(checkConnection){
        return res.json({success: false, error: "You are already friends"})
    }

    ChatModel.findOneAndUpdate({
        _id: req.params.id,
        acceptor_id: req.body.acceptor_id
    },
     {status: true}
    , {new: true})
    .then(doc => {
        return res.json({success: true, doc});
      })
    .catch(err => {
        console.log(err)
       return  res.json({success: false, error:err})
    })
  });





//send message
route.put('/send/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    } 

    const {error} = sendMessage.validate(req.body);
    if(error){
        console.log(error)
    return  res.json({success: false, error : error.details[0].message})
    }

 //check whether there is connection
 const checkConnection = ChatModel.findOne({
      _id:req.params.id,
    status: true
})

if(!checkConnection){
    return res.json({success: false, error: "you are not friends"})
}

  ChatModel.findOneAndUpdate({
      _id: req.params.id
    }, {$push : {messages: req.body}}, {
      new: true
    })
    .then(doc => {
        console.log(doc)
        if(!doc){
           return res.json({success: false, error: "doex not exists"})
        }
       return res.json({success: true, doc});
    })
    .catch(err => {
        res.json({success: false, message:err})
    })
  
  });


//delete message
route.delete('/delete/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    } 

    const {error} = sendMessage.validate(req.body);
    if(error){
        console.log(error)
    return  res.json({success: false, error : error.details[0].message})
    }

 //check whether there is connection
 const checkConnection = ChatModel.findOne({
      _id:req.params.id
})

if(!checkConnection){
    return res.json({success: false, error: "you are not friends"})
}

  ChatModel.findOneAndUpdate({
      _id: req.params.id
    }, {$pushAll : {messages: {_id: req.body.id}}}, {
      new: true
    })
    .then(doc => {
        console.log(doc)
        if(!doc){
           return res.json({success: false, error: "doex not exists"})
        }
       return res.json({success: true, doc});
    })
    .catch(err => {
        res.json({success: false, message:err})
    })
  
  });



//delete all messages
route.delete('/deleteAll/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    } 

    const {error} = sendMessage.validate(req.body);
    if(error){
        console.log(error)
    return  res.json({success: false, error : error.details[0].message})
    }

 //check whether there is connection
 const checkConnection = ChatModel.findOne({
      _id:req.params.id,
})

if(!checkConnection){
    return res.json({success: false, error: "you are not friends"})
}

  ChatModel.findOneAndUpdate({
      _id: req.params.id
    }, {messages: []}, {
      new: true
    })
    .then(doc => {
        console.log(doc)
        if(!doc){
           return res.json({success: false, error: "does not exists"})
        }
       return res.json({success: true, doc});
    })
    .catch(err => {
        res.json({success: false, message:err})
    })
  
  });



//block user
route.post('/block/:id', async(req, res) => {
    let body = req.body
    const {error} = sendFriendRequest.validate(body);
     if(error){
         console.log(error)
     return  res.json({success: false, error : error.details[0].message})
     }

     //check if there is aconnection already
    const checkConnection = ChatModel.findOne({
        acceptor_id: body.acceptor_id,
        requestor_id: body.requestor_id,
        status: true
    })

    if(!checkConnection){
        return res.json({success: false, error: "You are already not friends"})
    }

    ChatModel.findOneAndUpdate({
        _id: req.params.id,
        acceptor_id: req.body.acceptor_id
    },
     {status: false}
    , {new: true})
    .then(doc => {
        return res.json({success: true, doc});
      })
    .catch(err => {
        console.log(err)
       return  res.json({success: false, error:err})
    })
  });


export default route;