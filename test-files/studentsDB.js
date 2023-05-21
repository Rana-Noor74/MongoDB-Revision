const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connectDB = require("../src/db/connection");
const studentModel = require("../src/models/students");
const studentJSON = require("../student.json");
// const studentJSON = {
//     "name":"Agarwal", 
//     "roll_no" : 5,
//     "class_standard" : "primary",
//     "age":14,
//     "email":"agarwal@gmail.com", 
//     "attendance" : "Present"
// };


const startConnection = async () =>{
    try{
        await connectDB(process.env.MONGODB_URI);
        await studentModel.create(studentJSON);
        console.log("connection success")
    } catch (error){
        console.log("This is catch block");
        console.log(error)
        console.log(error.message)
    }
}

startConnection();
