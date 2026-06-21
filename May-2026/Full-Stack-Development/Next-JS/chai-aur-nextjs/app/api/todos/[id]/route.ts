import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, ctx: RouteContext) {
  try {
    const { id } = await ctx.params;
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

export async function PATCH(request: NextRequest, ctx: RouteContext) {
  try {
    const { id } = await ctx.params;
    const body = await request.json();
    const { title, completed } = body;

    const todo = await prisma.todo.update({
      where: { id },
      data: {
        ...(typeof title === "string" ? { title } : {}),
        ...(typeof completed === "boolean" ? { completed } : {}),
      },
    });

    return NextResponse.json({ success: true, data: todo }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Failed to update todo" },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: NextRequest, ctx: RouteContext) {
  try {
    const { id } = await ctx.params;

    await prisma.todo.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Failed to delete todo" },
      { status: 500 }
    );
  }
}