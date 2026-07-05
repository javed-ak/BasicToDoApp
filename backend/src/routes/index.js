require("dotenv").config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { safeParse } = require('zod');
const { userSignup, userSignin, createTodo, updateTodo } = require('../utils/types');
const { User, Todo } = require('../db/db');
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.use(express.json());

router.post('/signup', async (req, res) => {
    const signupPayload = req.body;
    const parsedPayload = userSignup.safeParse(signupPayload);

    if(!parsedPayload.success){
        return res.status(400).json({
            msg: "Invalid inputs"
        })
    }

    try {
        const { username, firstName, lastName, password } = parsedPayload.data;
        const existingUser = await User.findOne({username});
        if(existingUser) {
            return res.status(409).json({
                msg: "User already exists"
            });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            firstName,
            lastName,
            password: hashedPassword
        });

        const token = jwt.sign({
            userId: newUser._id
        }, 
        process.env.JWT_SECRET
    );
    return res.json({
        msg: "User created successfully",
        token: token
    });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

router.post('/signin', async (req, res) => {
    const signinPayload = req.body;
    const parsedPayload = userSignin.safeParse(signinPayload);

    if(!parsedPayload.success){
        return res.status(400).json({
            msg: "Invalid inputs"
        })
    }

    try {
        const {username, password} = parsedPayload.data;
        const user = await User.findOne({ username })

        if(!user) {
            return res.status(401).json({
                msg: "Invalid username or password"
            }); 
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                msg: "Invalid password"
            });
        }

        const token = jwt.sign({
            userId: user._id
            }, 
            process.env.JWT_SECRET
        );
            
        return res.json({
            msg: "Logged in successfully",
            token: token
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
})

router.post('/todo', authMiddleware, async (req, res) => {
    const createTodoPayload = req.body;
    const parsedPayload = createTodo.safeParse(createTodoPayload);

    if(!parsedPayload.success){
        return res.status(403).json({
            msg: "Invalid inputs"
        });
    }
    
    try {
        const {title, description} = parsedPayload.data;
        const todo = await Todo.create({
            title,
            description,
            userId: req.userId
        })

        return res.status(201).json({
            msg: "Todo created successfully",
            todo
        });
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
})

router.get('/todos', authMiddleware, async (req, res) => {
    try {
        const todos = await Todo.find({
        userId: req.userId
        }, {
            title: true,
            description: true,
            isDone: true
        });
        
        return res.json({
            todos
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "Internal server error"
        });
    }
})

router.put('/todo/:id', (req, res) => {
    const updateTodoPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updateTodoPayload);

    if(!parsedPayload.success){
        return res.status(403).json({msg: "Inputs are not correct"});
    }

    res.json({msg: "Endpoint working correctly"})
})

router.delete('/todo/:id', (req, res) => {
    const todoId = req.params.id;

    res.json({msg: "Endpoint working correctly"})
})

module.exports = router;