import Fastify, { FastifyReply, FastifyRequest } from "fastify"
import fastifySwagger from "@fastify/swagger"
import { withRefResolver } from "fastify-zod"
import fjwt from "@fastify/jwt"
import userRoutes from "./modules/user/user.route"
import { userSchemas } from "./modules/user/user.schema"
import { todoSchemas } from "./modules/todo/todo.schema";
import todoRoutes from "./modules/todo/todo.route";
import cors from "@fastify/cors"


declare module 'fastify' {
    export interface FastifyInstance {
        authenticate: any;
    }
}

declare module '@fastify/jwt' {
    interface FastifyJWT {
        user: {
            email: string,
            name: string,
            id: number
        }
    }
}

export const server = Fastify({ logger: true })

server.register(fjwt, {
    secret: process.env.JWT_TOKEN || "dummy"
})

server.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        await request.jwtVerify()
    } catch (error) {
        return reply.send(error)
    }
})

server.get('/', async (request, reply) => {
    return { hello: "world" }
})

async function main() {

    for (const schema of [...userSchemas, ...todoSchemas]) {
        server.addSchema(schema);
    }

    server.register(cors, {
        origin: true,
        allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
        methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']

    })

    server.register(fastifySwagger, withRefResolver({
        openapi: {
            info: {
                title: 'Todo App',
                description: 'API for todo',
                version: '1.1.1'
            }
        }
    }))
    server.register(import('@fastify/swagger-ui'), {
        routePrefix: '/docs',
    })

    server.register(userRoutes, { prefix: 'api/users' })
    server.register(todoRoutes, { prefix: 'api/todos' })
    try {
        await server.listen({ port: 3001 })
        console.log(`server ready at http://localhost:3001`)
    } catch (error) {
        server.log.error(error)
        process.exit(1)
    }
}

main()