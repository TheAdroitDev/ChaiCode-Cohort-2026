import { Todo } from "@/lib/todos";
import { AddTodoForm } from "./add-todo-form";
import { TodoList } from "./todo-list";

type TodoAppProps = {
  initialTodos: Todo[];
};

export function TodoApp({ initialTodos }: TodoAppProps) {
  return (
    <main className="mx-auto flex min-h-full w-full max-w-xl flex-col px-4 py-16">
      <header className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-orange-500">
          Tasks
        </p>
        <h1 className="text-3xl font-bold text-zinc-50">Todo List</h1>
        <p className="mt-2 text-zinc-400">
          Server-rendered list with client-side actions via your API routes.
        </p>
      </header>

      <section className="mb-8">
        <AddTodoForm />
      </section>

      <section>
        <TodoList todos={initialTodos} />
      </section>
    </main>
  );
}
