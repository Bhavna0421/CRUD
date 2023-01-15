const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique: [true,"please enter unique name"],
        // minlength: 6
    },
    lastname:{
        type: String,
        required: true
    },
    level:{
        type:String,
        required: true


    }

})
module.exports= mongoose.model('student',studentSchema)