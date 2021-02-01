import express from "express";
import {uploader} from '../middlewares/multer.js'
import StudentModel from "../models/StudentModel.js";
import {login} from  '../middlewares/validate.js';
import  bcrypt from 'bcrypt';
const route = express.Router();

route.get('/', async(req, res) => {
   res.send('shared rotes')
})

route.post('/upload/', uploader.single('photo') ,(req , res) => {
    try {
      console.log(req.body.caption)
      res.send({path: `${req.file.filename}`});
    } catch (err) {
      console.log(err)
      res.json({success: false, message:err});
    }
})

route.post('/signin', async(req, res) => {
  let body = req.body;
  
  const {error} = login.validate(body);
  if(error){
   return   res.send({ error: error.details[0].message})
  }

  StudentModel.findOne({
    userID: body.userID,
    }).then((user) => {
     if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
           return  res.json({success: true, user})
        } 
        else {
           return res.json({ error: 'Wrong Password or  ID' })
        }
    } 
    else {
       return res.json({ error: 'Wrong Password or  ID' })
    }
  }).catch(err => {
    console.log(err)
  })

})



export default route;