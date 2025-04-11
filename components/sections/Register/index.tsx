"use client";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (email?.trim() === "abc@gmail.com") {
    }
  };
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex w-1/2 bg-black text-white p-10 flex-col justify-between relative">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6">
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
          </div>
          <span className="font-semibold text-lg">Acme Inc</span>
        </div>

        <div className="max-w-md">
          <blockquote className="text-2xl font-medium mb-4">
            This Library has saved me countless hours of work and helped me
            deliver stunning designs to my clients faster than ever before.
          </blockquote>
          <cite className="text-sm">Sofia Davis</cite>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {/* This is where the Figma UI controls are shown, not part of the actual design */}
        </div>
      </div>

      {/* Right side - White section */}
      <div className="flex-1 flex flex-col p-10">
        <div className="flex justify-end">
          <Link href="/login" className="text-sm font-medium">
            Login
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold tracking-tight mb-2">
              Create an account
            </h1>
            <p className="text-sm text-gray-500">
              Enter your email below to create your account
            </p>
          </div>

          <div>
            <form action="" onSubmit={(e) => register(e)} className="space-y-4">
              <div>
                <Input type="email" placeholder="name@example.com" />
              </div>

              <Button type="submit" className="w-full">
                Create account
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              <GithubIcon className="mr-2 h-4 w-4" />
              Github
            </Button>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            By Clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-gray-900">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-gray-900">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
