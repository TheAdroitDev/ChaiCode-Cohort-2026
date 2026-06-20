"use client";

import { useEffect, useState } from "react";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export default function TodoClient() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/todos");
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Something went wrong");
      }

      setTodos(result.data || []);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();

    if (!trimmed) return;

    try {
      setSubmitting(true);
      setError("");

      const response = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: trimmed }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Could not add todo");
      }

      setTitle("");
      await fetchTodos();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not add todo");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-400">Today</p>
            <h2 className="text-xl font-semibold text-white">Tasks</h2>
          </div>
          <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm text-orange-300">
            {todos.length} items
          </span>
        </div>

        <form onSubmit={addTodo} className="mb-5 flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-500"
          />
          <button
            type="submit"
            disabled={submitting}
            className="rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Adding..." : "Add"}
          </button>
        </form>

        {error && (
          <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex min-h-40 items-center justify-center text-sm text-zinc-400">
            Loading tasks...
          </div>
        ) : todos.length === 0 ? (
          <div className="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-zinc-700 text-sm text-zinc-400">
            No tasks yet. Add your first one.
          </div>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3"
              >
                <span className="text-sm text-zinc-200">{todo.title}</span>
                <span className="text-xs text-zinc-500">
                  {new Date(todo.createdAt).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <aside className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-zinc-900 p-5">
        <p className="text-sm text-orange-300">Overview</p>
        <h3 className="mt-1 text-2xl font-semibold text-white">{todos.length}</h3>
        <p className="mt-2 text-sm text-zinc-400">Todos currently saved in your API-backed list.</p>
      </aside>
    </div>
  );
}