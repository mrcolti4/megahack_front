import { ReactNode, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

export default function PublicRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate({ to: "/history" });
    }
  }, [token, navigate]);

  return <>{children}</>;
}
