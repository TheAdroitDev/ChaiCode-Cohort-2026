import type { Request, Response } from "express";
import { todoValidationSchema, type Todo } from "../../models/todo.schema.js";



class TodoController {
    private _db: Todo[]

    constructor() {
        this._db = []
    }

    public handleGetAllTodos(req: Request, res: Response) {
        const todos = this._db
        return res.json({ todos })
    }

    public async handleInsertTodo(req: Request, res: Response) {
        try {
            const unValidated = req.body;

            const validatedResult = await todoValidationSchema.parseAsync(unValidated);
            this._db.push(validatedResult);

            return res.status(201).json({ todo: validatedResult })
        } catch (error) {
            return res.status(501).json({ error })
        }
    }
}

export default TodoController;