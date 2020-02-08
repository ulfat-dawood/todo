var express = require('express');
var TaskModel = require("../models/task");
var router = express.Router();

router.get('/', async (req,res,next)=>{
    let tasks = await TaskModel.find({})
    res.send(tasks)
})



module.exports = router;