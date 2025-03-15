import { AuthContext } from "@/auth/AuthContext";
import PublicRoute from "@/auth/PublicRoute";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@tanstack/react-form";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useContext, useState } from "react";

export const Route = createFileRoute("/auth/login")({
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const { login } = useContext(AuthContext)!;
  const form = useForm({
    onSubmit: (values) => {
      login(values.value.email, values.value.password)
        .then(async (userCreds) => {
          const token = await userCreds.user.getIdToken();
          localStorage.setItem("token", token);
          navigate({ to: "/recognize" });
        })
        .catch((error) => {
          setError(error.message);
        });
    },
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <PublicRoute>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50 p-4">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
        </div>
        <div className="container relative flex min-h-screen items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Welcome back
              </h1>
              <p className="text-muted-foreground">
                Enter your credentials to access your account
              </p>
            </div>
            <div className="space-y-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  form.handleSubmit();
                }}
                className="overflow-hidden rounded-lg border bg-white shadow-md"
              >
                <div className="h-2 bg-gradient-to-r from-pink-400 via-purple-500 to-green-500"></div>
                <div className="space-y-4 p-6">
                  <div className="space-y-2">
                    <form.Field
                      name="email"
                      children={(field) => (
                        <>
                          <Label htmlFor="email" className="text-gray-700">
                            Email
                          </Label>
                          <Input
                            id="email"
                            placeholder="m@example.com"
                            required
                            type="email"
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            data-error={error ? true : false}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="border-gray-200 focus:border-pink-400 focus:ring-pink-400 data-[error=true]:border-red-400 data-[error=true]:focus:border-red-400"
                          />
                        </>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <form.Field
                      name="password"
                      children={(field) => (
                        <>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="password" className="text-gray-700">
                              Password
                            </Label>
                          </div>
                          <Input
                            id="password"
                            required
                            type="password"
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            data-error={error ? true : false}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="border-gray-200 focus:border-pink-400 focus:ring-pink-400 data-[error=true]:border-red-400 data-[error=true]:focus:border-red-400"
                          />
                        </>
                      )}
                    />
                  </div>
                  <Button
                    className="transition active:bg-pink-600 w-full cursor-pointer bg-pink-400 hover:bg-pink-500 text-white"
                    type="submit"
                  >
                    Sign in
                  </Button>
                </div>
                {error && (
                  <p className="text-red-500 text-sm p-2 text-center">
                    {error}
                  </p>
                )}
              </form>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link
                  className="transition font-medium text-purple-500 hover:text-purple-600"
                  to="/auth/register"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicRoute>
  );
}
