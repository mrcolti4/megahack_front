import { ReactNode, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "@tanstack/react-router";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useContext(AuthContext)!;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate({ to: "/auth/login" });
    }
  }, [user, navigate]);

  return <>{children}</>;
}
