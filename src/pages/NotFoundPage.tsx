import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-start justify-center gap-5 px-4 py-20 md:px-6">
      <p className="text-sm uppercase tracking-[0.2em] text-blue-500">404</p>
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">Page not found</h1>
      <p className="max-w-xl text-zinc-600 dark:text-zinc-300">
        The page you requested does not exist. Continue exploring TechCrew from the home page.
      </p>
      <Link to="/" className="text-sm font-medium text-blue-500 hover:text-blue-400">
        Back to Home
      </Link>
    </div>
  );
}
