"use server";

import { prisma } from "@/lib/db";

export async function createTodo(title: string) {
    try {
        const todo = await prisma.todo.create({
            data: {
                title: title
            }
        })
        return todo;
    } catch (error) {
        console.log(error);
    }
}

export async function getTodos() {
    try {
        const todos = await prisma.todo.findMany();
        return todos;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function updateTodo(id:string,title:string,completed:boolean){
    try {
        const todo = await prisma.todo.update({
            where:{id},
            data:{title,completed}
        })
        return todo;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteTodo(id:string){
    try {
        await prisma.todo.delete({
            where:{id}
        })
        return true;
    } catch (error) {
        console.log(error);
    }
}

export async function getTodoById(id:string){
    try {
        const todo = await prisma.todo.findUnique({
            where:{id}
        })
        return todo;
    } catch (error) {
        console.log(error);
    }
}
