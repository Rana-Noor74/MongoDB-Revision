//importing required modules and files
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connection = require("./src/db/connection");
const students = require("./src/routes/students");
const teacher =  require("./src/routes/teachers");
const institute =  require("./src/routes/institute");
//setting up middle-wares
app.use("/", institute);
app.use("/students/", students);
app.use("/teachers/", teacher);
//listening server

const start = async ()=>{
    try{
        //connecting db
        await connection();
        //server defining
        app.listen(3000, ()=>{
            console.log("localhost:3000");
        })
    }catch (error){
        console.log(error);
    }
};
start();


