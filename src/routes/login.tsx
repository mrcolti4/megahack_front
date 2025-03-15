import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@tanstack/react-form";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const form = useForm({
    onSubmit: (values) => {
      console.log(values);
    },
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50 p-4">
      <div className="absolute inset-0 overflow-hidden">
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
            <div className="overflow-hidden rounded-lg border bg-white shadow-md">
              <div className="h-2 bg-gradient-to-r from-pink-400 via-purple-500 to-green-500"></div>
              <div className="space-y-4 p-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="m@example.com"
                    required
                    type="email"
                    className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-gray-700">
                      Password
                    </Label>
                  </div>
                  <Input
                    id="password"
                    required
                    type="password"
                    className="border-gray-200 focus:border-pink-400 focus:ring-pink-400"
                  />
                </div>
                <Button
                  className="w-full bg-pink-400 hover:bg-pink-500 text-white"
                  type="submit"
                >
                  Sign in
                </Button>
              </div>
            </div>
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link
                className="font-medium text-purple-500 hover:text-purple-600"
                to="/register"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
