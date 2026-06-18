import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/db";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, ctx: RouteContext) {
    try {
        const { id } = await ctx.params

        const todo = await prisma.todo.findUnique({
            where: { id },
        });

        if (!todo) {
            return NextResponse.json(
                { success: false, error: "Todo not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: todo }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch todo" },
            { status: 500 }
        );
    }

}