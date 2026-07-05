const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String},
    password: {type: String, required: true}
})

const todoSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true},
    title: {type: String, required: true},
    description: {type: String},
    isDone: {type: Boolean, default: false}
})

const User = mongoose.model('users', userSchema);
const Todo = mongoose.model('todos', todoSchema);

module.exports = {
    User, Todo
}