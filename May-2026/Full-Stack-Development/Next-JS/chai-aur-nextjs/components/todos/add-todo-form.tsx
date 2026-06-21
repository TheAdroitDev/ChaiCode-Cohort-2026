"use client";

import { createTodo } from "@/actions/todo";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function AddTodoForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = title.trim();
    if (!trimmed || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const todo = await createTodo(trimmed);
      if (todo) {
        setTitle("");
        router.refresh();
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
      />
      <button
        type="submit"
        disabled={isSubmitting || !title.trim()}
        className="rounded-lg bg-orange-500 px-5 py-3 font-medium text-zinc-950 transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Adding..." : "Add"}
      </button>
    </form>
  );
}
