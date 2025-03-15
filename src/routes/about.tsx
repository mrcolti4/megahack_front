import ProtectedRoute from "@/auth/ProtectedRoute";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <ProtectedRoute>
      <div className="p-2">Hello from About!</div>
    </ProtectedRoute>
  );
}
