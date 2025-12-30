"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist.
          <br />
          Redirecting to home page in 5 seconds...
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button
            onClick={() => router.push("/")}
            variant="default"
          >
            Go Home Now
          </Button>
        </div>
      </div>
    </div>
  );
}
