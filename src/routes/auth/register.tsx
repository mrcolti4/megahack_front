import { AuthContext } from "@/auth/AuthContext";
import PublicRoute from "@/auth/PublicRoute";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/firebase/config";
import { Label } from "@radix-ui/react-label";
import { useForm } from "@tanstack/react-form";
import { createFileRoute, Link } from "@tanstack/react-router";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { useContext } from "react";

export const Route = createFileRoute("/auth/register")({
  component: Register,
});

function Register() {
  const { register } = useContext(AuthContext)!;

  const form = useForm({
    onSubmit: (values) => {
      register(values.value.email, values.value.password);
    },
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      updateProfile(user, {
        displayName:
          form.state.values.firstName + " " + form.state.values.lastName,
      });
    }
  });

  return (
    <PublicRoute>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-purple-50 p-4">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
        </div>
        <div className="container relative flex min-h-screen items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Create an account
              </h1>
              <p className="text-muted-foreground">
                Enter your details to create your account
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
              className="space-y-6"
            >
              <div className="overflow-hidden rounded-lg border bg-white shadow-md">
                <div className="h-2 bg-gradient-to-r from-green-500 via-purple-500 to-pink-400"></div>
                <div className="space-y-4 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <form.Field
                        name="firstName"
                        children={(field) => (
                          <>
                            <Label
                              htmlFor="firstName"
                              className="text-gray-700"
                            >
                              First Name
                            </Label>
                            <Input
                              id="firstName"
                              required
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                            />
                          </>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <form.Field
                        name="lastName"
                        children={(field) => (
                          <>
                            <Label htmlFor="lastName" className="text-gray-700">
                              Last Name
                            </Label>
                            <Input
                              id="lastName"
                              required
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                            />
                          </>
                        )}
                      />
                    </div>
                  </div>
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
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
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
                          <Label htmlFor="password" className="text-gray-700">
                            Password
                          </Label>
                          <Input
                            id="password"
                            required
                            type="password"
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-gray-700">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirm-password"
                      required
                      type="password"
                      className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <Button
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                    type="submit"
                  >
                    Create account
                  </Button>
                </div>
              </div>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link
                  className="font-medium text-pink-400 hover:text-pink-500"
                  to="/auth/login"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PublicRoute>
  );
}
