import TodoClient from "@/components/TodoClient";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3">
          <span className="w-fit rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-300">
            Daily planner
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Manage your tasks
          </h1>
        </div>

        <TodoClient />
      </section>
    </main>
  );
}
