"use client";

import { Todo } from "@/lib/todos";
import { useRouter } from "next/navigation";
import { useState } from "react";

type TodoListProps = {
  todos: Todo[];
};

export function TodoList({ todos }: TodoListProps) {
  const router = useRouter();
  const [pendingId, setPendingId] = useState<string | null>(null);

  async function toggleTodo(id: string, completed: boolean) {
    setPendingId(id);

    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !completed }),
      });

      if (res.ok) {
        router.refresh();
      }
    } finally {
      setPendingId(null);
    }
  }

  async function deleteTodo(id: string) {
    setPendingId(id);

    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    } finally {
      setPendingId(null);
    }
  }

  if (todos.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-900/50 px-6 py-12 text-center">
        <p className="text-zinc-400">No todos yet. Add one above to get started.</p>
      </div>
    );
  }

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="space-y-3">
      <p className="text-sm text-zinc-500">
        {completedCount} of {todos.length} completed
      </p>

      <ul className="divide-y divide-zinc-800 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
        {todos.map((todo) => {
          const isPending = pendingId === todo.id;

          return (
            <li
              key={todo.id}
              className="flex items-center gap-3 px-4 py-3 transition hover:bg-zinc-800/50"
            >
              <button
                type="button"
                onClick={() => toggleTodo(todo.id, todo.completed)}
                disabled={isPending}
                aria-label={todo.completed ? "Mark incomplete" : "Mark complete"}
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition disabled:opacity-50 ${
                  todo.completed
                    ? "border-orange-500 bg-orange-500 text-zinc-950"
                    : "border-zinc-600 hover:border-orange-500"
                }`}
              >
                {todo.completed && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>

              <span
                className={`flex-1 text-sm ${
                  todo.completed
                    ? "text-zinc-500 line-through"
                    : "text-zinc-100"
                }`}
              >
                {todo.title}
              </span>

              <button
                type="button"
                onClick={() => deleteTodo(todo.id)}
                disabled={isPending}
                aria-label="Delete todo"
                className="rounded-md px-2 py-1 text-xs text-zinc-500 transition hover:bg-zinc-800 hover:text-orange-400 disabled:opacity-50"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
