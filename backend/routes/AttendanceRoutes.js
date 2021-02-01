import express from "express";
import AttendanceModel from "../models/AttendenceModel.js";
import {startAttendance, endAttendance} from '../middlewares/validate.js'


const route = express.Router();

route.get('/', async(req, res) => {
    const ads = await AttendanceModel.find();
    res.json(ads);
})

//each student  records 

//each teacher record

//each non teaching records



// record start time
route.post('/start/:id', async(req, res) => {
    if(!req.params.id) {
        return res.json({success: false, error: 'Missing URL parameter: username'})
    }

    let body = req.body
   const {error} = startAttendance.validate(body);

    if(error){
        console.log(error)
       return  res.json({success: false, error : error.details[0].message})
    }

    //check whether already exist
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const isExist = await AttendanceModel.findOne({
       userID: req.params.id,
       date: {$gte: today}
    }).exec()
    if(isExist){
        return res.json({success: false, error: "Already Registered"})
    }

    AttendanceModel.create({
        userID: req.params.id,
        startLocation: req.body.startLocation
    })
    .then(doc => {
        console.log(doc)
        res.json({success: true, doc});
      })
    .catch(err => {
        console.log(err)
        res.json({success: false, error:err})
    })
  });



//record end time
route.post('/end/:id', async(req, res) => {

    //check if userID
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }


    //validate
    const {error} = endAttendance.validate(req.body);

    if(error){
        console.log(error)
       return  res.json({success: false, error : error.details[0].message})
    }

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    

    AttendanceModel.findOneAndUpdate({
        userID: req.params.id,
        date: {$gte: today},
        endTime : null
        },{
            endTime : today.toISOString(),
            endLocation: req.body.endLocation
        },{
        new: true
        })
        .then(doc => {
            console.log(doc)
            if(doc){
                 return  res.json({success: true, doc});
            }
            else{
                return res.json({success: false, error: "Already recorded or Start time not recorded"})
            }
           
        })
        .catch(err => {
          return  res.json({success: false, error:err})
        })
  
  });



export default route;