import prisma from "../utils/prisma";
import { CreateTodoInput } from "./todo.schema";

export async function createTodo(data: CreateTodoInput & { ownerId: any }) {
    return prisma.todo.create({
        data
    })
}

export function getTodos() {
    return prisma.todo.findMany({
        select: {
            title: true,
            content: true,
            done: true,
            id: true,
            createdAt: true,
            updatedAt: true,
            owner: {
                select: {
                    name: true,
                    id: true
                }
            }
        }
    })
}