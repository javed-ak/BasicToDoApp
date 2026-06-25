const z = require('zod')

const createToDo = z.object({
    title: z.string(),
    description: z.string()
})

const updateToDo = z.object({
    id: z.string()
})

module.exports = {
    createToDo: createToDo,
    updateToDo: updateToDo
}