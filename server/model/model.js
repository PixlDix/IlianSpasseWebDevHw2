const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    courseName : {
        type : String,
        //required: true
    },
    courseGrade : {
        type: String,
        //required: true,
    },
    credits : {
        type: String,
        //required: true,
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;