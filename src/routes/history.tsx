import { AuthContext } from "@/auth/AuthContext";
import ProtectedRoute from "@/auth/ProtectedRoute";
import { useGetAllDisposeRecords } from "@/services/db/queries";
import { createFileRoute } from "@tanstack/react-router";
import { useContext, useEffect } from "react";

export const Route = createFileRoute("/history")({
  component: RouteComponent,
});

function RouteComponent() {
  const getAllDisposeRecords = useGetAllDisposeRecords();
  const { user } = useContext(AuthContext)!;
  const disposeRecords = getAllDisposeRecords.data || [];

  useEffect(() => {
    if (!user) return;
    getAllDisposeRecords.mutate(user.uid);
  }, []);

  if (getAllDisposeRecords.isPending) {
    return <p>Loading...</p>;
  }

  return (
    <ProtectedRoute>
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-xl font-bold">Dispose Records</h1>
        {disposeRecords.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {disposeRecords.map((record, index) => (
              <li key={index} className="p-4 border rounded">
                <p>
                  <strong>Disposed At:</strong>{" "}
                  {new Date(record.created_at.seconds * 1000).toLocaleString()}
                </p>
                <p>
                  <strong>Labels:</strong>
                </p>
                <ul className="ml-4 list-disc">
                  {record.labels.map((label, i) => (
                    <li key={i}>
                      {label.category} - {label.description}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-500">No dispose records found.</p>
        )}
      </div>
    </ProtectedRoute>
  );
}
