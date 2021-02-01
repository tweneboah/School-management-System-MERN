import express from "express";
import TimeTableModel from "../models/TimeTableModel.js";

const route = express.Router();

route.get('/', async(req, res) => {
    const data = await TimeTableModel.find();
    res.json(data);
})


export default route;