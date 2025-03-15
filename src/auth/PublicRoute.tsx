import { ReactNode, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "@tanstack/react-router";

export default function PublicRoute({ children }: { children: ReactNode }) {
  const { user } = useContext(AuthContext)!;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate({ to: "/" });
    }
  }, [user, navigate]);

  return <>{children}</>;
}
