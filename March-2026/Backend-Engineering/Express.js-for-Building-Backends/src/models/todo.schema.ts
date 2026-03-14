import { z } from "zod"

export const todoValidationSchema = z.object({
    id: z.string().describe("ID of the todo"),
    title: z.string().describe("Title of the todo"),
    description: z.string().optional().describe("Description for the todo"),
    isCompleted: z.boolean().default(false).describe("if the todo is completed or not")
})

export type Todo = z.infer<typeof todoValidationSchema>;