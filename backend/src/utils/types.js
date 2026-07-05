const z = require('zod');

const userSignup = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string().optional(),
    password: z.string().min(6)
})

const userSignin = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})

const createTodo = z.object({
    title: z.string().min(3),
    description: z.string().optional()
})

const updateTodo = z.object({
    title: z.string().min(3).optional(),
    description: z.string().optional(),
    isDone: z.boolean().optional()
})

module.exports = {
    userSignin, userSignup,
    createTodo, updateTodo
}