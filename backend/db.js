const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://pratishthapragya:Pragya%40123@cluster0.km4nk.mongodb.net/todos")

const todoSchema= mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default: false
    }
})

const todo= mongoose.model('todos', todoSchema);
module.exports={
    todo
}

