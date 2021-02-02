import express from "express";
import SchoolModel from "../models/SchoolModel.js";
import  bcrypt from 'bcrypt';
import {create, login, changePassword} from  '../middlewares/validate.js';
import {stringtoLowerCaseSpace, stringSpace} from '../middlewares/utils.js';
import {role} from '../middlewares/variables.js'

const route = express.Router();


//edit school details

//change password