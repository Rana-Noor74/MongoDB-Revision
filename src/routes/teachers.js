//importing required modules and files
const express =  require("express");
const teacherRoutes = express.Router();
const teacherController = require("../controllers/teachers");
//defining teachers routes
teacherRoutes.route("/").get(teacherController.getAllTeachers);
teacherRoutes.route("/science-teachers").get(teacherController.getScienceTeachers);
teacherRoutes.route("/arts-teachers").get(teacherController.getArtsTeachers);
//exporting teachers routes
module.exports = teacherRoutes;


