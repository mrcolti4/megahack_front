import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="h-screen bg-[url(/home-bg.png)] p-2">
      <div className="flex flex-col justify-center gap-4 pt-20 ml-20">
        <h1 className="text-4xl font-bold text-gray-700">
          Smart Waste Disposal with AI
        </h1>
        <p className="text-lg text-gray-600 max-w-[700px]">
          Optimize your waste management with AI-powered solutions! Our
          intelligent system helps you identify, sort, and properly dispose of
          trash, reducing environmental impact and making recycling easier than
          ever. Simply upload a photo or describe your waste, and let AI guide
          you to the best disposal method.
        </p>
        <Link
          to="/auth/login"
          className="transition hover:bg-gray-100 text-gray-600 border rounded-md px-4 py-2 inline-flex justify-center items-center max-w-[150px]"
        >
          Start now
        </Link>
      </div>
    </div>
  );
}
