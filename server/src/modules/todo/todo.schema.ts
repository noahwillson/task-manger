import { optional, z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'


const todoInput = {
    title: z.string(),
    content: z.string().optional(),
    done: z.boolean(),
}

const todoGenerated = {
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string()
}

const createTodoSchema = z.object({
    ...todoInput
})


const todoResponseSchema = z.object({
    ...todoInput, ...todoGenerated
})

const todosResponseSchema = z.array(todoResponseSchema)

export type CreateTodoInput = z.infer<typeof createTodoSchema>

export const { schemas: todoSchemas, $ref } = buildJsonSchemas({
    createTodoSchema,
    todosResponseSchema,
    todoResponseSchema
}, { $id: 'mySchema' })