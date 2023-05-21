const connection = require("../db/connection");
const studentsModel = require("../models/students");

module.exports ={
    //get all students
    getAllStudents : async (req, res)=>{
        res.send(await studentsModel.find({}).sort({"roll_no" : 1}));
    },
    //get present students
    getPresentStudents : async (req, res)=>{
        res.send(await studentsModel.find({attendance : "Present"}).sort({"roll_no" : 1}));
    },
    //get absent students
    getAbsentStudents : async (req, res)=>{
        res.send(await studentsModel.find({attendance : "Absent"}).sort({"roll_no" : 1}));
    }
}