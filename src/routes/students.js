//importing required modules and files
const express = require("express");
const studentRoutes = express.Router();
const studentController = require("../controllers/students");
//defining students routes
studentRoutes.route("/").get(studentController.getAllStudents);
studentRoutes.route("/present-students").get(studentController.getPresentStudents);
studentRoutes.route("/absent-students").get(studentController.getAbsentStudents);
studentRoutes.route("/leave-students").get(studentController.getOnleaveStuents);
studentRoutes.route("/adding-students").get(studentController.addStudents);

//exporting students routes
module.exports = studentRoutes;