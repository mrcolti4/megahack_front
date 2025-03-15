import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          How it works
        </Link>{" "}
        <Link to="/auth/login" className="[&.active]:font-bold">
          Login
        </Link>
        <Link to="/auth/register" className="[&.active]:font-bold">
          Register
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
