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
    },
    getOnleaveStuents : async (req, res)=>{
        res.send(await studentsModel.find({attendance : "Leave"}).sort({"roll_no" : 1}));
    },
    addStudents :  async (req, res)=>{
        var objectArray = [
            {
                "name":"Radhe", 
                "roll_no" : 6,
                "class_standard" : "matric",
                "age":16, 
                "email":"radhe23@gmail.com", 
                "attendance" : "Leave"
            },   
            {
                "name":"Wick", 
                "roll_no" : 7,
                "class_standard" : "intermediate",
                "age":19, 
                "email":"wick@gmail.com",  
                "attendance" : "Leave"
            },    
            {
                "name":"Raghav",
                "roll_no" : 8,
                "class_standard" : "graduation",
                "age":22, 
                "email":"raghav32@gmail.com",  
                "attendance" : "Leave"
            } 
        ];
        //add multiple documents in a collection pass an array of obeject to the insertMany(dataArray)
        await studentsModel.insertMany(objectArray).then(async ()=>{
            await res.send("Data is added succesffulyy");
        }).catch((error)=>{
            console.log("Error");
            console.log(error);
            res.send("Failed to add the documents");
        });
    }
}