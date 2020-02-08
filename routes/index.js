var express = require('express');
var moment = require('moment');
var TaskModel = require("../models/task");
var router = express.Router();
var trash='check1'
var checkbox='trash1'

/* GET home page. */
router.get('/', async (req, res, next) => {
  var arrs = [];
  let tasks = await TaskModel.find({})
  tasks.map((x)=>{
    if(x.done===true){
      inside_arr = [x._id.toString(),x.title, x.description, moment(x.due).format('MMMM Do YYYY'), 'background-color: #B8B8B8']
    }
    else{
      inside_arr = [x._id.toString(),x.title, x.description, moment(x.due).format('MMMM Do YYYY')]
    }
    arrs.push(inside_arr)
  })
  res.render('index', { arr : arrs });
});

module.exports = router;
