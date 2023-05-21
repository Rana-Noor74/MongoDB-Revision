//importing required modules and files
const express = require("express");
const instituteRoutes =  express.Router();
const instituteControllers = require("../controllers/institute");
//defining institute routes
instituteRoutes.route("/").get(instituteControllers.instituteInfo);
instituteRoutes.route("/info").get(instituteControllers.instituteInfo);
//exporting institute routes
module.exports = instituteRoutes;