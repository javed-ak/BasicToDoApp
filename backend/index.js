const express = require('express');
const cors = require('cors');
const { createToDo, updateToDo } = require('./types');
const { todo } = require('./db');

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createToDo.safeParse(createPayload);
    if(!parsedPayload.success){
        return req.statusCode(411).json({
            msg: "You send the wrong inputs"
        })
    }
    try {
        await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
        })
    } catch (err) {
        return res.json(403).json({
            msg: "Something went wrong"
        })
    }
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find();
    res.json({todos});
})

app.put('/updateTodo', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateToDo.safeParse(updatePayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg: "You send the wrong input"
        })
    }
    try {
        await todo.updateOne({
        _id: updatePayload.id
        }, {
            completed: true
        })
        res.json({
            msg: "Todo marked as completed"
        })
    } catch(err){
        return res.status(411).json({
            msg: "Something went wrong"
        })
    }
})

app.delete('/todos', (req, res) => {
    res.json({
        msg: "Yet not able to delete"
    })
})

app.listen(PORT, () => {
    console.log('Server run on port', PORT);
})