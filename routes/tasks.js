var express = require('express');
var TaskModel = require("../models/task");
var router = express.Router();



router.post('/add', async (req,res,next)=>{
    try{
        let task = new TaskModel(req.body);
        await task.save();
        res.redirect('/');
    }catch(err){
        console.log(err);
    }
})

router.post('/delete', async(req, res)=>{
    try{
        ID = JSON.stringify(req.body).split("\"")[1];
        await TaskModel.deleteOne({_id: ID})
        res.redirect('/');
    }catch(err){
        res.send(err)
    }
})

router.post('/done', async(req, res)=>{
    try{
        ID = JSON.stringify(req.body).split("\"")[1];
        await TaskModel.updateOne({_id: ID}, {done: true})
        res.redirect('/');
    }catch(err){
        res.send(err)
    }
})

module.exports = router;