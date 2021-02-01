import express from "express";
import Notifications from "../models/NotificationModel.js";

const route = express.Router();

route.get('/', async(req, res) => {
    const data = await Notifications.find();
    res.json(data);
})


export default route;