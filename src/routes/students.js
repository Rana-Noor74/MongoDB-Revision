//importing required modules and files
const express = require("express");
const studentRoutes = express.Router();
const studentController = require("../controllers/students");
//defining students routes
studentRoutes.route("/").get(studentController.getAllStudents);
studentRoutes.route("/present-students").get(studentController.getPresentStudents);
studentRoutes.route("/absent-students").get(studentController.getAbsentStudents);
//exporting students routes
module.exports = studentRoutes;