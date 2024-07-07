import { FastifyReply, FastifyRequest } from "fastify";
import { createTodo, getTodos } from "./todo.service";
import { CreateTodoInput } from "./todo.schema";



export async function createTodoHandler(request: FastifyRequest<{ Body: CreateTodoInput }>, reply: FastifyReply) {

    const todo = await createTodo({
        ...request.body,
        ownerId: request.user.id
    })

    return todo
}


export async function getTodoHandler() {
    const todos = await getTodos();

    return todos
}