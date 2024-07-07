import { FastifyReply, FastifyRequest } from "fastify";
import { createUser, findUserByEmail, findUsers } from "./user.service";
import { CreateUserInput, LoginInput } from "./user.schema";
import { verifyPassword } from "../utils/hash";
import { server } from "../../app";

declare module 'fastify' {
    export interface FastifyInstance {
        jwt: any;
    }
}

export async function registerUserHandler(request: FastifyRequest<{ Body: CreateUserInput }>, reply: FastifyReply) {


    const body = request.body

    try {
        const user = await createUser(body)
        return reply.code(201).send(user)
    } catch (error) {
        console.log(error)
        return reply.code(500).send(error)
    }
}

export async function loginHandler(request: FastifyRequest<{ Body: LoginInput }>, reply: FastifyReply) {
    const body = request.body

    // find user

    const user = await findUserByEmail(body.email)

    if (!user) {
        return reply.code(401).send({
            message: "invaild email address"
        })
    }

    // verify password

    const coreectPassword = verifyPassword({
        candidatePassword: body.password,
        salt: user.salt,
        hash: user.password
    })

    if (coreectPassword) {
        const { password, salt, ...rest } = user
        // genrate access token
        return { accessToken: server.jwt.sign(rest) }
    }

    return reply.code(401).send({
        message: "invaild email or password"
    })
}

export async function getUsersHandler() {
    const users = await findUsers()

    return users
}