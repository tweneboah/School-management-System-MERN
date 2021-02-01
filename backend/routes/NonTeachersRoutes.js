import express from "express";
import NonTeacherModel from "../models/NonTeacherModel.js";
import {create, login} from  '../middlewares/validate.js';
import  bcrypt from 'bcrypt';
import {stringtoLowerCaseSpace, stringSpace} from '../middlewares/utils.js';
import {role} from '../middlewares/variables.js'
const route = express.Router();


//get all stall 
route.get('/', async(req, res) => {
    const data = await NonTeacherModel.find({role: "NonTeacher"});
    res.json(data);
})

//get one staff by id
route.get('/:id', async(req, res) => {
    if(!req.params.id) {
        return res.status(400).send('Missing URL parameter: username')
      }
    await StudentModel.findOne({ _id: req.params.id })
    .then(user => {
        if(user){
        return  res.json({success: true,user})
        }
        else{
        return  res.json({success: false, message: 'Student does not exists'})
        }
    })
    .catch(err => {
        return res.json({success: false, message: "Server error"})
    });
})
//create
route.post('/create', async(req , res) => {
    let body = req.body
    body = {
      ...body,
      name: stringtoLowerCaseSpace(body?.name),
      surname: stringtoLowerCaseSpace(body?.surname),
      email: stringSpace(body?.email),
      role: stringtoLowerCaseSpace(role.NonTeacher)
    }
     const {error} = create.validate(body);
    if(error){
      return  res.json({success: false, error : error.details[0].message})
     }
     const staffExist = await NonTeacherModel.findOne({
          email: body.email,
          name: body.name,
          surname: body.surname
      })
      if(staffExist){
          return res.json({success: false, error: "Staff Member Already exists"})
      }
  
      //calculate teacher
      const currentYear = new Date().getFullYear();
      const number = await NonTeacherModel.countDocuments({role: role.NonTeacher});
      let staffID = 'TN' + currentYear + (number + 1)
  
      bcrypt.hash(staffID, 10, (err, hash) => {
            if(err){
                console.log(err, "err")
              return   res.json({success: false, error: "something went wrong"})
            }
            const userData = {
                ...req.body,
                password: hash,
               userID: staffID
            }
            NonTeacherModel.create(userData).then(user => {
            return  res.json({success: true,user})
           }).catch(e => {
               console.log(e, "e")
             return   res.json({success: false, error: "something went wrong"})
           })
       })
  
  
  })
  

  //login
route.post('/signin', async(req, res) => {
    const {error} = login.validate(req.body);
    if(error){
     return   res.send({ error: error.details[0].message})
    }
    NonTeacherModel.findOne({
      userID: req.body.userID,
      role: req.body.role
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

  //change password
route.post('/changePassword/:id', async(req, res )=> {
  const {error} = changePassword.validate(req.body);
  if(error) {
      return  res.json({success: false, error : error.details[0].message})
  }

  NonTeacherModel.findOne({NonTeacherID:  req.params.id}).then(user => {
    if(user){
      if (bcrypt.compareSync(req.body.oldPassword, user.password)){
            bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
              if(err){
                console.log("err")
                return res.json( { success: false, message: err })
              }
              NonTeacherModel.findOneAndUpdate({
                NonTeacherID: req.params.id
              },{password: hash}, {
                   new: true
              })
              .then(doc => {
                   return res.json({success: true, user: doc})
                })
              .catch(e => {
                console.log("e")
                  return res.json( { success: false, message: e + "e"})
              })
          })  
      }
      else{
          return res.json( { success: false, message: "Wrong old password"})
      }
    }
    else{
      return res.json({success: false, message: "Student does not exist"})
    }
  })
})
  

  //edit
route.put('/update/:id', (req, res) => {
  if(!req.params.id) {
    return res.status(400).send('Missing URL parameter: username')
  } 
NonTeacherModel.findOneAndUpdate({
    NonTeacherID: req.params.id
  }, req.body, {
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

//delete
route.delete('/delete/:id', (req, res) => {
  if(!req.params.id) {
    return res.status(400).send('Missing URL parameter: username')
  }
NonTeacherModel.findOneAndRemove({
    NonTeacherID: req.params.id
  })
  .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})


export default route;