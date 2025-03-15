import { ReactNode, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (null === token) {
      navigate({ to: "/auth/login" });
    }
  }, [token, navigate]);

  return <>{children}</>;
}
