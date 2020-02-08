const mongoose = require('mongoose');
const config = require('config');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    due : {
        type : Date,
        required : true
    },
    done : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('taskModel', taskSchema, 'tasks');