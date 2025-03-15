import { AuthContext } from "@/auth/AuthContext";
import ProtectedRoute from "@/auth/ProtectedRoute";
import ActionButton from "@/components/ActionButton";
import { useCreateDisposeRecord } from "@/services/db/queries";
import { useRecognizeWaste } from "@/services/waste/queries";
import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";

export const Route = createFileRoute("/recognize")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useContext(AuthContext)!;
  const recognizeWaste = useRecognizeWaste();
  const createDisposeRecord = useCreateDisposeRecord();

  const form = useForm({
    onSubmit: async () => {
      const image = form.state.values.image;
      if (!image) return;

      recognizeWaste.mutate(image);
    },
    defaultValues: {
      image: null as File | null,
    },
  });

  const handleCreateDisposeRecord = () => {
    if (!user?.uid) {
      return;
    }
    if (recognizeWaste.data) {
      createDisposeRecord.mutate({
        user_id: user?.uid,
        labels: recognizeWaste.data.labels,
      });
    }
  };

  return (
    <ProtectedRoute>
      <div className="p-6 max-w-md mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <h1 className="text-xl font-bold">Upload File for AI Processing</h1>
          <form.Field
            name="image"
            children={(field) => {
              return (
                <input
                  type="file"
                  name="image"
                  onBlur={field.handleBlur}
                  onChange={(e) => {
                    if (!e.target.files) return;
                    field.handleChange(e.target.files[0]);
                  }}
                  className="mt-4"
                />
              );
            }}
          />
          <ActionButton disabled={recognizeWaste.isPending}>
            {recognizeWaste.isPending ? "Uploading..." : "Upload"}
          </ActionButton>
        </form>
        {recognizeWaste.isSuccess && (
          <div className="mt-4">
            <h2 className="text-lg font-bold">Result</h2>
            <pre>{JSON.stringify(recognizeWaste.data, null, 2)}</pre>
            <ActionButton
              onClick={handleCreateDisposeRecord}
              disabled={createDisposeRecord.isPending}
            >
              {createDisposeRecord.isPending ? "Creating..." : "Create record"}
            </ActionButton>
          </div>
        )}
        {recognizeWaste.isError && (
          <div className="mt-4">
            <h2 className="text-lg font-bold">Error</h2>
            <p>Something went wrong, please try again with different image</p>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
