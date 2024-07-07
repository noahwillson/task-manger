import { FastifyInstance } from "fastify";
import { createTodoHandler, getTodoHandler } from "./todo.controller";
import { $ref } from "./todo.schema";

async function todoRoutes(server: FastifyInstance) {
    server.post("/",
        {
            preHandler: [server.authenticate],
            schema: {
                body: $ref('createTodoSchema'),
                response: { 201: $ref('todoResponseSchema') }
            }
        },
        createTodoHandler
    )

    server.get('/', {
        schema: {
            response: { 200: $ref('todosResponseSchema') }
        }
    }, getTodoHandler)
}


export default todoRoutes