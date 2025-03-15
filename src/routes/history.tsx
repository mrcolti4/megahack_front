import { AuthContext } from "@/auth/AuthContext";
import { useGetAllDisposeRecords } from "@/services/db/queries";
import { createFileRoute } from "@tanstack/react-router";
import { useContext, useEffect } from "react";

export const Route = createFileRoute("/history")({
  component: RouteComponent,
});

function RouteComponent() {
  const getAllDisposeRecords = useGetAllDisposeRecords();
  const { user } = useContext(AuthContext)!;

  useEffect(() => {
    if (!user) return;
    getAllDisposeRecords.mutate(user.uid);
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(getAllDisposeRecords.data, null, 2)}</pre>
    </div>
  );
}
