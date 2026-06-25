const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Javed:admin123@cluster0.iobmisv.mongodb.net/TodoApp");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}