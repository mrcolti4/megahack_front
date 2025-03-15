import ProtectedRoute from "@/auth/ProtectedRoute";
import { useRecognizeWaste } from "@/services/waste/queries";
import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { create } from "zustand";

type FileStoreState = {
  result: [];
  setResult: (result: []) => void;
};

const useFileStore = create<FileStoreState>()((set) => ({
  result: [],
  setResult: (result: []) => set({ result }),
}));

export const Route = createFileRoute("/recognize")({
  component: RouteComponent,
});

function RouteComponent() {
  const { setResult } = useFileStore();
  const recognizeWaste = useRecognizeWaste();

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
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
            Upload
          </button>
        </form>
        {recognizeWaste.isSuccess && (
          <div className="mt-4">
            <h2 className="text-lg font-bold">Result</h2>
            <pre>{JSON.stringify(recognizeWaste.data, null, 2)}</pre>
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
