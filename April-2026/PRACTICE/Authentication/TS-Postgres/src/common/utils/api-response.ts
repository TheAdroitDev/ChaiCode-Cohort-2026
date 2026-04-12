import type { Response } from "express";

class ApiResponse {
    static ok<T>(res: Response, message: string, data: T | null = null): Response {
        return res.status(200).json({
            success: true,
            message,
            data
        })
    }

    static created<T>(res: Response, message: string, data: T | null = null): Response {
        return res.status(201).json({
            success: true,
            message,
            data,
        });
    }

    static noContent(res: Response):Response{
        return res.status(204).send();
    }
}

export default ApiResponse;