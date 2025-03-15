import { Link, ReactNode } from "@tanstack/react-router";

export default function NavLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="font-semibold transition hover:text-blue-500 [&.active]:text-blue-800"
    >
      {children}
    </Link>
  );
}
