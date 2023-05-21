const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name should be provided."],
    },
    roll_no : {
        type : Number,
        required : [true, "Roll # must be provided."],
        unique : [true, "Roll # must unique."],
    },
    class_standard : {
        type : String,
        enum: {
            values : ["primary","matric", "intermediate", "graduation"],
            message : `{VALUE} is not in list.`
        }
    },
    age : {
        type : Number,
    },
    email : {
        type : String,
        unique : true,
        required : [true, "Email should be unique."],
    },
    attendance : {
        type : String,
    },
    created_At : {
        type : Date,
        default : Date.now(),
    }
});

const studentModel = mongoose.model("Student", studentSchema);

module.exports= studentModel;